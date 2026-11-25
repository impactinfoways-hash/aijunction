module.exports = async function inquiry(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, message: 'Use POST to submit an inquiry.' });
  }

  const clean = (value) => typeof value === 'string' ? value.trim() : '';
  const name = clean(req.body?.name);
  const email = clean(req.body?.email);
  const message = clean(req.body?.message);
  if (!name || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 || !message || message.length > 3000) {
    return res.status(400).json({ ok: false, message: 'Please enter your name, a valid email and a message.' });
  }

  const webhookUrl = process.env.N8N_INQUIRY_WEBHOOK_URL;
  const secret = process.env.N8N_INQUIRY_WEBHOOK_SECRET;
  if (!webhookUrl || !secret) {
    return res.status(503).json({ ok: false, message: 'The inquiry form is not connected yet.' });
  }
  try {
    const upstream = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-AIJ-Inquiry-Key': secret },
      body: JSON.stringify({ name, email, message }),
      signal: AbortSignal.timeout(20000),
      redirect: 'error',
    });
    const result = await upstream.json();
    if (upstream.ok && result.ok === true) return res.status(200).json({ ok: true });
  } catch {
    // Upstream execution and configuration are inspected in n8n.
  }
  return res.status(502).json({ ok: false, message: 'We could not confirm delivery. Please try again later.' });
};
