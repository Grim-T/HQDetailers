import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vevmvajdoawyiagelsnk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZldm12YWpkb2F3eWlhZ2Vsc25rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MjgyNDAsImV4cCI6MjA2MDQwNDI0MH0.XPUKkUCLfK58W0bwat3xRj166MFcy8V9DysYs0dXaOo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);