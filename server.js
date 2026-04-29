// DEPRECATED for Vercel deployment - API moved to api/contact.js and api/subscribe.js&#10;// For local dev only: uncomment and node server.js (needs .env)&#10;// require('dotenv').config();

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");


const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://your-username.vercel.app",
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

const EMAIL_USER = process.env.EMAIL_USER || "ammarjanjuha92@gmail.com";
const EMAIL_PASS = process.env.EMAIL_PASS;

if (!EMAIL_USER || !EMAIL_PASS) {
  console.error("ERROR: Email credentials are not configured.");
}

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  if (!EMAIL_USER || !EMAIL_PASS) {
    return res.status(500).json({ code: 500, message: "Server email credentials are not configured." });
  }

  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  if (!email || !message) {
    return res.status(400).json({ code: 400, message: "Email and message are required." });
  }

  const mail = {
    from: `"Portfolio Contact Form" <${EMAIL_USER}>`,
    to: EMAIL_USER,
    replyTo: email,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone || "Not provided"}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error(error);
      res.status(500).json({ code: 500, message: "Failed to send email. Please try again later." });
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

router.post("/subscribe", (req, res) => {
  if (!EMAIL_USER || !EMAIL_PASS) {
    return res.status(500).json({ code: 500, message: "Server email credentials are not configured." });
  }

  const subscriberEmail = req.body.email;

  if (!subscriberEmail || subscriberEmail.indexOf("@") === -1) {
    return res.status(400).json({ code: 400, message: "A valid email address is required." });
  }

  const mail = {
    from: `"Portfolio Newsletter" <${EMAIL_USER}>`,
    to: EMAIL_USER,
    subject: "New Newsletter Subscription - Portfolio",
    html: `<p>A new user has subscribed to your newsletter.</p>
           <p>Subscriber Email: ${subscriberEmail}</p>
           <p>Date: ${new Date().toLocaleString()}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error(error);
      res.status(500).json({ code: 500, message: "Failed to process subscription. Please try again later." });
    } else {
      res.json({ code: 200, status: "Subscribed Successfully" });
    }
  });
});

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, "build")));

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
