import React from "react"
import Sidebar from "./Sidebar"
import { Card, CardDeck, CardColumns } from "react-bootstrap"

function Education(props) {
  return (
    <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>
      <div className="w3-row-padding">
        <Sidebar />
        <div className="w3-twothird">
          <div className="w3-container w3-card w3-white">
            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-university fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Education</h2>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>University of Waterloo</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Sept 2016 - Apr 2021</h6>
              <p>Bachelor of Applied Sciences - BASc, Computer Engineering</p>
              <h5 className="w3-opacity"><b>Relevant Courses</b></h5>
            </div>
            {/* <CardDeck> */}
            {/* <CardColumns> */}
            <a href="https://uwflow.com/course/ece250" target="_blank">
              <Card className="w3-card w3-padding w3-margin">
                <Card.Title className="w3-text-teal">ECE 250</Card.Title>
                <Card.Subtitle className="w3-text-dark-grey w3-opacity"><h6><b>Algorithms and Data Structures (C++)</b></h6></Card.Subtitle>
              </Card>
            </a>
            <a href="https://uwflow.com/course/ece356" target="_blank">
              <Card className="w3-card w3-padding w3-margin">
                <Card.Title className="w3-text-teal">ECE 356</Card.Title>
                <Card.Subtitle className="w3-text-dark-grey w3-opacity"><h6><b>Databases (SQL)</b></h6></Card.Subtitle>
              </Card>
            </a>
            <a href="https://uwflow.com/course/ece254" target="_blank">
              <Card className="w3-card w3-padding w3-margin">
                <Card.Title className="w3-text-teal">ECE 254</Card.Title>
                <Card.Subtitle className="w3-text-dark-grey w3-opacity"><h6><b>Operating Systems and Systems Programming (Linux, C)</b></h6></Card.Subtitle>
              </Card>
            </a>
            <a href="https://uwflow.com/course/ece351" target="_blank">
              <Card className="w3-card w3-padding w3-margin">
                <Card.Title className="w3-text-teal">ECE 351</Card.Title>
                <Card.Subtitle className="w3-text-dark-grey w3-opacity"><h6><b>Compilers (Java)</b></h6></Card.Subtitle>
              </Card>
            </a>
            <a href="https://uwflow.com/course/ece254" target="_blank">
              <Card className="w3-card w3-padding w3-margin">
                <Card.Title className="w3-text-teal">ECE 390</Card.Title>
                <Card.Subtitle className="w3-text-dark-grey w3-opacity"><h6><b>Engineering Economics and Design (Matlab, Excel)</b></h6></Card.Subtitle>
              </Card>
            </a>
            {/* </CardColumns> */}
            {/* </CardDeck> */}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;