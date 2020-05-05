import React from "react";
// import Thumbnail from './Thumbnail.js';
import '../App.css';
// import { Button, Card, CardColumns, Carousel } from 'react-bootstrap';
import Sidebar from "./Sidebar";

function Home(props) {
    return (
        // {/* Page Container */}
        <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>
            {/* The Grid */}
            <div className="w3-row-padding">
                <Sidebar />
                {/* Main Content */}
                <div className="w3-twothird">
                    <div className="w3-container w3-card w3-white">
                        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-male w3-margin-right w3-xxlarge w3-text-teal" />A little about me</h2>
                        <div className="w3-container">
                            <h5 className="w3-opacity"><b>I'm Shashank Kotturi (aka Shawshank Redemption)</b></h5>
                            <h6 className="w3-opacity">4A Computer Engineering student at the University of Waterloo</h6>
                            <p>Current looking for my 6th and final coop term</p>
                            <a href="/#/education" className="w3-text-teal">Curious about what courses I'm taking? Take a look here -></a>
                            <hr />
                        </div>
                        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase w3-margin-right w3-xxlarge w3-text-teal" />Where I worked previously</h2>
                        <div className="w3-container">
                            <ul className="w3-text-grey">
                                <li>SAP Canada</li>
                                <li>Flashfood</li>
                                <li>Telus</li>
                                <li>Marsh and McLennan Companies</li>
                            </ul>
                            <a href="/#/experience" className="w3-text-teal">Want to know more about where I worked? Just click here!</a>
                            <hr />
                        </div>
                        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-laptop w3-margin-right w3-xxlarge w3-text-teal" />Things I'm currently focused on</h2>
                        <div className="w3-container">
                            <ul className="w3-text-grey">
                                <li>Survey Room</li>
                                <li>Capstone Design Project</li>
                                <li>UW Prod Con</li>
                            </ul>
                            <a href="/#/extracurriculars" className="w3-text-teal">Better click here if you want to know more :)</a>
                            <hr />
                        </div>
                        <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-child w3-margin-right w3-xxlarge w3-text-teal" />Some hobbies</h2>
                        <div className="w3-container">
                            <ul className="w3-text-grey">
                                <li>Politics (both US and Canadian)</li>
                                <li>Cars</li>
                                <li>Stocks</li>
                                <li>Cooking</li>
                                <li>Travelling</li>
                            </ul>
                        </div>
                        <br />
                    </div>
                    {/* End Main Content */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Page Container */}
        </div>
    );
}

export default Home;