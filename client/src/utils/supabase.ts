import { createClient } from '@supabase/supabase-js';

const VITE_SUPABASE_URL="https://gyryoehaqlvytcovrlil.supabase.co";
const VITE_SUPABASE_PUBLISHABLE_KEY="sb_publishable_mLAxNfvkDvd2ToNNj0hzmA_RvKakAlN";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseUrl = VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const supabaseKey = VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);