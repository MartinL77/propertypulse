
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

if (!supabaseKey || !supabaseUrl) {
    throw new Error("SUPABASE_KEY is not defined in the environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey)
