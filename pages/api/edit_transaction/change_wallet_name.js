import { supabase } from '../../../lib/supabase.js';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let { wallet_id, wallet_name } = req.body
        
        const { data, error } = await supabase
            .from('user_wallets')
            .update({'wallet_name': wallet_name})
            .match({'wallet_id': wallet_id})
        
        if (error === null) {
            res.status(200).json({ error: error });
        }
    }
}