import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ieysgigusjkklepmowtm.supabase.co";
const supabaseKey = "sb_publishable_ghBcvMWKHIK7h1Y-Gv27rw_Ov_02Dq4";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);