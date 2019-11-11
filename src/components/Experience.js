import React from "react"
import Sidebar from "./Sidebar";

function Experience(props) {
  return (
    <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>
      <div className="w3-row-padding">
        <Sidebar />
        <div className="w3-twothird">
          <div className="w3-container w3-card w3-white">
            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Work Experience</h2>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>Flashfood, Product Manager</b></h5>
              <h6>Support System Restructuring</h6>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />May 2019 - Aug 2019</h6>
              <ul>
                <li>Conceived restructuring of the customer support system and organized meetings with business & technical teams to define project scope; developed a business case & presented multiple technical solutions to gather positive stakeholder approval from multiple teams.</li>
                <li>Designed upgraded FAQ page to reduce total number of customer tickets by 40% & eliminate 20% of new inquiries; cut support team costs by 30% through automation & optimized organizational process of incoming customer tickets.</li>
                <li>Introduced Google Analytics tracking in the FAQ page to provide daily product statistics on pages visited, form submissions & drop off points.</li>
              </ul>
              <h6>Product Strategy Analytics</h6>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Jul 2019 - Aug 2019</h6>
              <ul>
                <li>Proposed strategic tracking of in-app events to provide design & engineering teams with feedback on app performance & customer satisfaction.</li>
                <li>Refined project scope to identify important in-app events to track and compare vendor solutions that provide analytics for in-app events.</li>
                <li>Developed a proposal to migrate to Amplitude's analytics platform for product analytics and reports resulting in annual cost savings of over $100,000.</li>
              </ul>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>Telus, Full Stack Developer</b></h5>
              <h6>Kitsune Order Portal</h6>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Sept 2018 - Dec 2018</h6>
              <ul>
                <li>Designed wireframes for an enhanced web portal interface for small business customers to customize internet packages with available add-ons; presented functional prototypes to executive team & implemented positive feedback in bi-weekly sprints.</li>
                <li>Leveraged React and Redux components to introduce an add-ons page to maximize the number of options that customers can choose from.</li>
                <li>Discovered redundant API calls made to the Express server in the backend using New Relic; refactored server code to eliminate 20% of internal API calls and reduce server usage by 30%, effectively improving application speed by over 50%.</li>
              </ul>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>Telus, Backend Developer</b></h5>
              <h6>ARGUS Models Configuration and Splunk Message Filtering</h6>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Jan 2018 - Apr 2018</h6>
              <ul>
                <li>Implemented a REST API in Django to access the Argus security platform for Telus. Included OAuth 2.0 and permission checks to ensure authorized users with specific clearances can add, remove or configure certain models within the database. Designed various models for team members to create and connect with other models in the database.</li>
                <li>Created a custom command using the Splunk-Python-SDK and Kafka-Python API to display messages from Kafka within the Splunk dashboard. Optimized time spent searching messages manually by adding a regex filter, and by limiting execution time or the maximum number of messages to be displayed.</li>
              </ul>
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>Marsh Canada Limited, Software Developer/Architect</b></h5>
              <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />May 2017 - Aug 2017</h6>
              <ul>
                <li>Tested advanced feedback response in Jenkins to build projects and run tests instantaneously for every push to GitHub.</li>
                <li>Automated Jenkins to poll repo for new updates, build a simple Node.js app, run a Mocha test and email test results.</li>
                <li>Attempted to decrease wait time for automated process by replacing polling with GitHub webhooks.</li>
              </ul>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;