import React from 'react';
import image from '../profile.jpg';

function Sidebar() {
    return (
        <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
                <div className="w3-display-container">
                    <img src={image} style={{ width: '100%' }} alt="My Picture" />
                    <div className="w3-display-bottomleft w3-container w3-text-white">
                        <h3>Shashank Kotturi</h3>
                    </div>
                </div>
                <br />
                <div className="w3-container">
                    <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />Product Manager</p>
                    <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />Vancouver, BC</p>
                    <p><a href="mailto:shashank.kotturi@edu.uwaterloo.ca" className="w3-text-teal"><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />shashank.kotturi@edu.uwaterloo.ca</a></p>
                    <p><a href="https://www.linkedin.com/in/shashank-kotturi/" target="_blank" className="w3-text-teal"><i className="fa fa-linkedin fa-fw w3-margin-right w3-large w3-text-teal" />shashank-kotturi</a></p>
                    <p><a href="https://github.com/shashankkotturi" target="_blank" className="w3-text-teal"><i className="fa fa-github fa-fw w3-margin-right w3-large w3-text-teal" />shashankkotturi</a></p>
                    <p><a href="tel:6046005956" className="w3-text-teal"><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />6046005956</a></p>
                    <hr />
                    <p className="w3-large"><b><i className="fa fa-code fa-fw w3-margin-right w3-text-teal" />Frameworks, Languages and Tools</b></p>
                    <p>React, Redux, Express</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: '90%' }}>90%</div>
                    </div>
                    <p className="w3-margin-top">Python</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: '80%' }}>
                            <div className="w3-center w3-text-white">80%</div>
                        </div>
                    </div>
                    <p className="w3-margin-top">Javascript</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: '75%' }}>75%</div>
                    </div>
                    <p className="w3-margin-top">JIRA, Confluence</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: '100%' }}>100%</div>
                    </div>
                    <hr />
                    <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal" />Skills</b></p>
                    <p>Active Listening, Effective Communication</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: '95%' }}>95%</div>
                    </div>
                    <p className="w3-margin-top">Project Scope Management</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: '75%' }}>75%</div>
                    </div>
                    <p className="w3-margin-top">Prototyping</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: '90%' }}>90%</div>
                    </div>
                    <p className="w3-margin-top">Data Collection, Extraction and Analysis</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: '80%' }}>80%</div>
                    </div>
                    <br />
                </div>
            </div><br />
        </div>
    );
}

export default Sidebar;