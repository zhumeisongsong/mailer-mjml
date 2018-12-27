const nodemailer = require('nodemailer')
const config = require('./config.js')
const renderTemplate = require('./template.js')

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'zhumei.song@monstar-lab.com', // generated ethereal user
    pass: 'ytbx2222222' // generated ethereal password
  }
});

// setup email data with unicode symbols
const mailOptions = {
  from: config.from, // sender address
  to: config.to, // list of receivers
  subject: config.subject, // Subject line
  text: config.text, // plain text body
  html: renderTemplate('zhumei', 'zhumei') // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
// Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});
