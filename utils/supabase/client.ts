import { createClient } from '@supabase/supabase-js'
import { NEXT_PUBLIC_SUPABASE_API_KEY, NEXT_PUBLIC_SUPABASE_URL } from '../../config';

const supabaseUrl = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_SUPABASE_URL : NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_SUPABASE_API_KEY : NEXT_PUBLIC_SUPABASE_API_KEY;

if (!supabaseKey || !supabaseUrl) {
    throw new Error("SUPABASE_KEY is not defined in the environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseKey)
