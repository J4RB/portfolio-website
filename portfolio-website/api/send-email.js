const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  let mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Message from ${req.body.name}`,
    text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`
  };

  let info = await transporter.sendMail(mailOptions);

  res.send('Email sent');
};