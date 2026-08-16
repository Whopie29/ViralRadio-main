import { createClient } from "@supabase/supabase-js";

const DEFAULT_SUPABASE_URL = "https://oywzprauazuhrrazhuqj.supabase.co";
const DEFAULT_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95d3pwcmF1YXp1aHJyYXpodXFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY4ODExMTMsImV4cCI6MjEwMjQ1NzExM30.XWJxXaT9_EMXimLN720vuEfZTlpTkbi4sWAySXP8VmA";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || DEFAULT_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});

