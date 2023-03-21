import { supabase } from '../../lib/supabase.js';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let { userId } = req.body
        let { data, error } = await supabase.from('user_wallets').select().eq('user_id', userId)

        if (error === null) {
            console.log(JSON.stringify(data));
            res.status(200).json(data);
        }
    }
}