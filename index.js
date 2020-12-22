 const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const nodemailer = require('nodemailer');
const cors=require('cors');


const app = express();
 app.use('/static', express.static(path.join(__dirname, 'client', 'build')))
 app.use(express.static(path.join(__dirname, 'client', 'build')));
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
res.send('success');
  })

  
  
  
