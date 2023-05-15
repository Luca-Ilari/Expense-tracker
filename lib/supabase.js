import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

export async function getWallets(userId) {
    let { data, error } = await supabase.from('user_wallets').select().eq('user_id', userId)
    if (error === null) {
        return data;
    }
}

export async function getUserId(email) {
    let { data, error } = await supabase.from('users').select('user_id').eq('email', email)
    //if there is no user with that email --> createUser(email)
    if (error === null) {
      return data[0].user_id;
    }
}

export async function createUser(email){
    //to do
}