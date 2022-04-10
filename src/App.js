import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Ideas from './components/Ideas';

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
