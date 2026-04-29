import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ code: 405, message: 'Method not allowed' });
  }

  const { firstName, lastName, email, phone, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ code: 400, message: 'Email and message are required.' });
  }

  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_PASS = process.env.EMAIL_PASS;

  if (!EMAIL_USER || !EMAIL_PASS) {
    return res.status(500).json({ code: 500, message: 'Server email credentials are not configured.' });
  }

  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS
    },
  });

  const name = firstName + ' ' + lastName;
  const mail = {
    from: `"Portfolio Contact Form" <${EMAIL_USER}>`,
    to: EMAIL_USER,
    replyTo: email,
    subject: 'Contact Form Submission - Portfolio',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone || 'Not provided'}</p>
           <p>Message: ${message}</p>`,
  };

  try {
    await transporter.sendMail(mail);
    res.status(200).json({ code: 200, status: 'Message Sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, message: 'Failed to send email. Please try again later.' });
  }
}
