
var nodemailer = require('nodemailer');

// Create a transporter object using SMTP
var transporter = nodemailer.createTransport({
  service: 'YourEmailServiceProvider', // e.g., 'Gmail' or 'SMTP'
  auth: {
    user: 'YourEmailAddress',
    pass: 'YourEmailPassword'
  }
});

// Define email data
var mailOptions = {
  from: 'YourEmailAddress',
  to: 'YourRecipientEmailAddress',
  subject: 'Test Email',
  text: 'This is a test email sent using Node.js.'
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log('Error sending email: ' + error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
