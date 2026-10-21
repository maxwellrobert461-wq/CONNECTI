// api/verify.js
export default async function handler(req,res){
  const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET; // sk_live_...
  const { ref } = req.body;
  const r = await fetch(`https://api.paystack.co/transaction/verify/${ref}`,{ headers:{ Authorization:`Bearer ${PAYSTACK_SECRET}` }});
  const d = await r.json();
  if(d.data?.status==='success') res.json({success:true, data:d.data});
  else res.status(400).json({success:false});
}