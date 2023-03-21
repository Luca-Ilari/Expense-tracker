import { supabase } from '../../lib/supabase.js';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let { name, pw } = req.body
        const { data, error } = await supabase.from('users').select().match({'name':name,'pw':pw})
        
        if (error === null) {
            //console.log("data "+JSON.stringify(data));
            res.status(200).json(data[0]);
        }
    }
}