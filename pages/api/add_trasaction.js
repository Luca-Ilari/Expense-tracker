import { supabase } from '../../lib/supabase.js';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let { date, amount, description, wallet_id, tag_id } = req.body
        
        const { data, error } = await supabase
            .from('transactions')
            .insert([
                {
                    date: date,
                    amount: amount,
                    description: description,
                    wallet_id: wallet_id,
                    tag_id: tag_id 
                },
            ])
        if (error === null) {
            res.status(200).json({ sium: 'siumm' });
        }
    }
}