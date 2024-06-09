import { createClient } from "@supabase/supabase-js";

const url = process.env.DB_URL
const key = process.env.DB_KEY

export const sb = createClient(url, key)
