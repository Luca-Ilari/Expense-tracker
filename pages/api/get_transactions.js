import { supabase } from '../../lib/supabase.js';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let { walletId } = req.body
        let { data, error } = await supabase
            .from('transactions')
            .select('*,user_tags(tag_name)')
            .eq('wallet_id', walletId)
            .order('date', { ascending: true })
            
        console.log("ssssssssssssssssssssssss");
        data.forEach(transaction => {
            var temp= transaction.user_tags.tag_name
            delete transaction.user_tags
            transaction.tag_name = temp
            console.log(temp);
        });
        if (error === null) {
            console.log(data);
            res.status(200).json(data);
        } else {
            console.log(error)
        }
    }
}