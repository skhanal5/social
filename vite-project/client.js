import { createClient } from '@supabase/supabase-js'
// @ts-ignore
console.log(import.meta.env)
// @ts-ignore
const URL = import.meta.env.VITE_DB_URL
// @ts-ignore
const API_KEY = import.meta.env.VITE_DB_KEY
export const supabase = createClient(URL, API_KEY);