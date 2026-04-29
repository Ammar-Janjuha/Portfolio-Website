import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  console.log('Subscribe API called:', JSON.stringify(req.body));
  console.log('EMAIL_USER present:', !!process.env.EMAIL_USER);
  console.log('EMAIL_PASS present:', !!process.env.EMAIL_PASS);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ code: 405, message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || email.indexOf('@') === -1) {
    return res.status(400).json({ code: 400, message: 'A valid email address is required.' });
  }

  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_PASS = process.env.EMAIL_PASS;

  if (!EMAIL_USER || !EMAIL_PASS) {
    return res.status(500).json({ code: 500, message: 'Server email credentials are not configured. Check Vercel env vars.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS
    },
  });

  const mail = {
    from: `"Portfolio Newsletter" <${EMAIL_USER}>`,
    to: EMAIL_USER,
    subject: 'New Newsletter Subscription - Portfolio',
    html: `<p>A new user has subscribed to your newsletter.</p>
           <p>Subscriber Email: ${email}</p>
           <p>Date: ${new Date().toLocaleString()}</p>`,
  };

  try {
    await transporter.sendMail(mail);
    res.status(200).json({ code: 200, status: 'Subscribed Successfully' });
  } catch (error) {
    console.error('Send mail error:', error);
    res.status(500).json({ code: 500, message: 'Failed to process subscription. Please try again later.' });
  }
}
