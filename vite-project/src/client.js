import { createClient } from '@supabase/supabase-js'

const URL = 'https://hjbyjgekueynllzbddys.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqYnlqZ2VrdWV5bmxsemJkZHlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4MzgzMzUsImV4cCI6MjAxNTQxNDMzNX0.sg1Mkv5sDvaO6L9XduqsvT3HM9YECP5OJuhYSEqYRos';
export const supabase = createClient(URL, API_KEY);
// console.log(supabase.log)