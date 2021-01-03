import React, { Component } from "react";
import AppNav from "./AppNav";
import './contact.css';


import ReactDOM from 'react-dom';
import axios from 'axios';

// const API_PATH = 'http://localhost/api/index.php';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      email: '',
      subject:'',
      message: '',
      sent: false,
      error: null,
      res:'test'
    }
  }



    handleFormSubmit=(e)=>{
      e.preventDefault();
      let data={
        fname:this.state.fname,
        email:this.state.email,
        subject:this.state.subject,
        message:this.state.message
      }
      
      axios.post('/api/send',data)
            .then((response)=>{
        this.setState({res:response.data});
        this.setState({sent:true},this.resetForm());
           }).catch(()=>{
                         console.log("Message failed to send.")      
      })
      
    }

    resetForm(){
      this.setState({fname: '', email: '',subject:'', message: ''});
      setTimeout(()=>{
        this.setState({send:false})
      },3000)

           }



    // console.log(this.state);
  

  render() {
    return (
      <div>
          <AppNav/>  
      
        
       <br></br>
<div className="contact">
        
      
<form onSubmit={this.handleFormSubmit}>
  <label>Full Name</label>
  <input type="text" id="fname" name="fullname" placeholder="Your full name.."
    value={this.state.fname}
    onChange={e => this.setState({ fname: e.target.value })}
  />
  
  <label>Email</label>
  <input type="email" id="email" name="email" placeholder="Your email id"
    value={this.state.email}
    onChange={e => this.setState({ email: e.target.value })}
  />

<label>Subject</label>
  <input type="text" id="subject" name="subject" placeholder="Subject.."
    value={this.state.subject}
    onChange={e => this.setState({ subject: e.target.value })}
  />


  <label>Message</label>
  <textarea id="message" name="message" placeholder="Write something.."
    onChange={e => this.setState({ message: e.target.value })}
    value={this.state.message}
  ></textarea>
  <div className={this.state.sent?'msg msgAppear':'msg'}>
    Message has been sent. {this.state.res}
  </div>
  <br></br>
  <button className="button1" type="submit" value="Submit">SEND</button>
  
</form >
</div>
<br></br>
</div>
      
    );
  }
}

export default Contact;
