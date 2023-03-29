import { supabase } from '../../lib/supabase.js';

export default async function handler(req, res) {
    if (req.method === 'POST') {

        let { transaction_id, tag_id } = req.body
        
        const { data, error } = await supabase
            .from('transactions')
            .update({'tag_id': tag_id})
            .eq({'transaction_id': transaction_id})

        if (error === null) {
            res.status(200).json({ error: error });
        }
    }
}