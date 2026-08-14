import { useState, useEffect, useRef } from "react";

// Generate a persistent pseudo-random base count between 18 and 28 for atmospheric realism
const getBaseCount = () => {
  const hour = new Date().getHours();
  // Bus is slightly busier in evening and morning
  if (hour >= 17 && hour <= 23) return 24;
  if (hour >= 6 && hour <= 11) return 20;
  return 16;
};

export function useLivePassengers(isPlaying = true) {
  const [passengerCount, setPassengerCount] = useState(() => getBaseCount());
  const [isConnected, setIsConnected] = useState(false);
  const wsRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);
  const isPlayingRef = useRef(isPlaying);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    let unmounted = false;

    // Determine WebSocket URL based on current environment
    const getWsUrl = () => {
      try {
        const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
        const host = window.location.hostname;
        const port = process.env.REACT_APP_BACKEND_PORT || "8000";
        // If running in development with separate ports
        if (window.location.port === "3000") {
          return `${protocol}//${host}:${port}/api/ws/passengers`;
        }
        return `${protocol}//${window.location.host}/api/ws/passengers`;
      } catch {
        return null;
      }
    };

    const connectWebSocket = () => {
      const wsUrl = getWsUrl();
      if (!wsUrl) return;

      try {
        const ws = new WebSocket(wsUrl);
        wsRef.current = ws;

        ws.onopen = () => {
          if (unmounted) return;
          setIsConnected(true);
          // Announce listener status
          ws.send(JSON.stringify({ type: "status", listening: isPlayingRef.current }));
        };

        ws.onmessage = (event) => {
          if (unmounted) return;
          try {
            const data = JSON.parse(event.data);
            if (data && typeof data.count === "number") {
              setPassengerCount(data.count);
            }
          } catch {
            // Ignore parse errors
          }
        };

        ws.onclose = () => {
          if (unmounted) return;
          setIsConnected(false);
          // Try reconnecting after 5 seconds
          reconnectTimeoutRef.current = setTimeout(connectWebSocket, 5000);
        };

        ws.onerror = () => {
          // If WS fails, will trigger onclose and fallback gracefully
          try {
            ws.close();
          } catch {
            // ignore
          }
        };
      } catch {
        // Fallback simulation will run
      }
    };

    connectWebSocket();

    // Natural fluctuation simulation when running standalone or as atmospheric variance
    const simulationInterval = setInterval(() => {
      if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
        setPassengerCount((prev) => {
          const delta = (Math.random() > 0.5 ? 1 : -1) * (Math.random() > 0.7 ? 1 : 0);
          const base = getBaseCount();
          const next = Math.max(1, Math.min(base + 12, prev + delta));
          return next;
        });
      }
    }, 8000);

    return () => {
      unmounted = true;
      clearInterval(simulationInterval);
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      if (wsRef.current) {
        try {
          wsRef.current.close();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  // Update listening status when isPlaying changes
  useEffect(() => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      try {
        wsRef.current.send(JSON.stringify({ type: "status", listening: isPlaying }));
      } catch {
        // ignore
      }
    }
  }, [isPlaying]);

  return { passengerCount, isConnected };
}
