 const express = require('express');
const bodyParser = require('body-parser');

const nodemailer = require('nodemailer');
const cors=require('cors');


const app = express();

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 3001;
  app.listen(PORT,()=>{
    console.log('server start on port 3001');
  })

app.get('/', () => {
  resizeBy.send('welcome to server');
});

app.post('/api/send', (req, res) => {
let data=req.body
// res.send('Successfully');
let smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  port: 465,
  auth: {
      user: 'usivkum@gmail.com', // generated ethereal user
      pass: '**********'  // generated ethereal password
  }
  
});


// setup email data with unicode symbols
let mailOptions = {
  from: data.email, // sender address
  to: 'msivkum@gmail.com', // list of receivers
  subject: data.subject, // Subject line
  html:` 
  <p>You have a new message </p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${data.fname}</li>
      <li>Email: ${data.email}</li>
      <li>Subject : ${data.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${data.message}</p>
`
};

  // send mail with defined transport object
  smtpTransport.sendMail(mailOptions, (error, response) => {
      if (error) {
          res.send(error)
      }
      else
      {
       res.send('Success');
      }
  })
  
  smtpTransport.close();
  res.send('Successfully');
  })

  
  
  
