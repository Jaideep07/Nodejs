var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'k*********y@gmail.com',
    pass: '**********'
  }
});

var mailOptions = {
  from: 'k*********y@gmail.com',
  to: 'c**********h@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<center>Hello Mr.Chakka</center><br><center><h3>Your friend successfully sent you mail using nodejs</h3></center><br><b>Thank You</b>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
