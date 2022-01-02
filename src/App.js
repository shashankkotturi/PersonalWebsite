import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import Ideas from './Components/Ideas';

const resumeData = require('./resumeData.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header data={resumeData.main}/>
        <About data={resumeData.main}/>
        <Resume data={resumeData.resume}/>
        <Ideas data={resumeData.ideas}/>
        <Portfolio data={resumeData.portfolio}/> 
        <Testimonials data={resumeData.testimonials}/>       
        <Contact data={resumeData.main}/>
        <Footer data={resumeData.main}/>
      </div>
    );
  }
}

export default App;
