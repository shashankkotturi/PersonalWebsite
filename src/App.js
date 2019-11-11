import React from 'react';
import { BrowserRouter, Route, Link} from "react-router-dom";

import NavBarComp from './components/NavBarComp';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Extracurriculars from './components/Extracurriculars';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';

import AOS from 'aos';
import './App.css';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

AOS.init();

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBarComp />
        {/* <Sidebar /> */}
        <Route exact path="/" component={Home} />
        <Route path="/extracurriculars" component={Extracurriculars} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
