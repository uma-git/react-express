import React, { Component } from "react";
import AppNav from "./AppNav";
import Appnew from './Appnew.jsx';
import './App.css';
import {Button} from "reactstrap";
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
// import readskills from './images/reading-skills.png'
import read from './images/read.jpg';
import readrelax from './images/readrelax.jpg';
import read1 from './images/analytical.jpg';

// import search from './images/search.jpg';
import footer from './images/footer.svg';




import ReactDOM from 'react-dom';


class About extends Component {   
                          
  render() {
    return (
      <div className="homepage">
        <AppNav/>
        
       

<div>
  <br></br>
      <Grid container direction="row" justify="space-around">
        
        
        
        <Grid container item xs={12} sm={6} justify="center" alignItems="center">
        <h4><span>&nbsp;&nbsp;</span> <strong> Browse and find the books from anywhere </strong></h4>
        <p align="center"><span>&emsp;</span>Search for books anywhere, you don't need to know the name of the  book, if you know the name of the author or the publisher, just type and search by the order of release.
        <span>&emsp;</span>
       <Link to="/Appnew">
       <Button color="primary">
                Search Now  ...<i className='fas fa-search'></i>
              </Button>
              </Link>
             
              
              </p>

              
        </Grid>
        
        <Grid container item xs={12} sm={6} justify="space-around">
        <span></span><img src={read} width="400" height="420"/>
        
        </Grid>
        
        </Grid>
        </div>
        <div><br></br><br></br><br></br></div>
        <div>
        
        <Grid container  xs={12} >

        

      <Grid container item xs={12} sm={6} justify="space-around" alignItems="flex-start">
        <span></span><img src={read1} width="300" height="200"/>
        
        </Grid>

      <Grid container item xs={12} sm={6} justify="center" alignItems="center">
        
        <p align="center"><span>&emsp;</span>Reading improves your vocabulary. Whether for pleasure, study or information, reading practice improves vocabulary and streamlines reasoning and interpretation.
        <span>&emsp;</span>
       
              </p>

              
        </Grid>
        
        <Grid container item xs={12} sm={6} justify="center" alignItems="center">
        
        <p align="right"><span>&emsp;</span>Dynamic and relaxed reading is one of the best ways to acquire information. The ideal is to learn to read informative texts, scientific articles, textbooks, educational books, etc.
        <span>&emsp;</span>
       
              </p>

              
        </Grid>
      <Grid container item xs={12} sm={6} justify="space-around" alignItems="flex-start">
        <span></span><img src={readrelax} width="300" height="200"/>
        
        </Grid>

      
        
        
        
      </Grid>
    </div>
<div><br></br><br></br><br></br></div>

<div>
<Grid container  xs={12} >
<Grid container item xs={12} justify="center" alignItems="center">

<img src={footer} width="500" height="300"/>
</Grid>
</Grid>
</div>
       


      </div>
    );
  }
}

export default About;
