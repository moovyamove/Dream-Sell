const SUPABASE_URL =https: "//tnxmpubkdbiwihfahcrb.supabase.co/rest/v1/";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRueG1wdWJrZGJpd2loZmFoY3JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzNTk0MTIsImV4cCI6MjEwNjkzNTQxMn0.8iuS1npbJTSKlb6q9Sp83hmD4I4T6j0XFeIdyYym84Y
  ";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
