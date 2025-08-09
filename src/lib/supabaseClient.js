import { createClient } from '@supabase/supabase-js'

// Replace with your actual project API URL and anon key from Supabase → Settings → API
const supabaseUrl = 'https://lgrsdvghlmxwpehwkjkx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncnNkdmdobG14d3BlaHdramt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzMzQ5MDMsImV4cCI6MjA2OTkxMDkwM30.FrdKAC2c48BjCOgNzacP5QtHkLkm5ONZPm3D2-qxIy4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
