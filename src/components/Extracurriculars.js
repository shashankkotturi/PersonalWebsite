import React, { Component } from 'react'
import Sidebar from './Sidebar'

function Extracurriculars() {
  // return (
  //   <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>
  //     <Sidebar />

  //   <div>
  //     <h1>Capstone Design Project</h1>
  //   </div>
  //   </div>
  // );
  return (
    // {/* Page Container */}
    <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>
      {/* The Grid */}
      <div className="w3-row-padding">
        <Sidebar />
        {/* Main Content */}
        <div className="w3-twothird">
          <div className="w3-container w3-card w3-white">
            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-sitemap w3-margin-right w3-xxlarge w3-text-teal" />Capstone Design Project</h2>
            <div className="w3-container">
              <h5 className="w3-opacity"><b>My Role</b></h5>
              <p>
                As the product manager, it is important to discuss product ideas with other team members and decide on one project. Once the project idea is finalized, the next steps include creating a project proposal, planning the project activities, developing a timeline and creating a work breakdown structure (WBS) to assign work packages to team members. Furthermore, building a business case for the projects is vital to ensure that the product is viable in the market.
                Leading a team of 5 engineers to plan, design and finally develop a viable product will be interesting and I’m looking forward to working with my friends to produce an amazing product.
              </p>
              <hr />
              <h5 className="w3-opacity"><b>Ideas</b></h5>
              <h6 className="w3-opacity"><i className="fa fa-headphones fa-fw w3-margin-right" /><b>Spotify Headphones</b></h6>
              <p>
                This idea involves creating a pair of headphones that can function without an external device (ex: phone, laptop, smartwatch) nearby.
              </p>
              <h6 className="w3-opacity"><i>Problem intro</i></h6>
              <p>
                As a health fanatic, I love going on long runs and bike rides (especially if the weather is nice). I constantly listen to music to push myself as I go across town. However, carrying a phone in my pocket while running is a huge nuisance. Either my phone will keep bouncing around or it might fall if my pockets are too big. And trust me, I don’t want to have a smartwatch on when I’m sweating (even if it’s waterproof, it’s just annoying on my wrist).
              </p>
              <h6 className="w3-opacity"><i>Proposed solutions and major project decisions</i></h6>
              <p>
                There’s two major ways the product can be developed: either using in-ear buds or with over-ear headphones. Depending on team member skills and knowledge, a decision will be made. Another major issue to consider whether the prototype should be built from scratch or by adding components to an existing pair of headphones. Since the project must completed before the last semester in university, it is important to consider how the time constraint will affect the prototype.
              </p>

              <h6 className="w3-opacity"><i className="fa fa-money fa-fw w3-margin-right" /><b>FoodSaver</b></h6>
              <p>
                This idea involves providing store managers and retailers with a basic overview of perishable inventory, with a specific focus on how food waste can be prevented while driving revenue.
              </p>
              <h6 className="w3-opacity"><i>Problem Statement</i></h6>
              <p>
                Most retailers do not have the right tools to track the status of perishable foods within their stores. Store employees are not aware of expired items until a customer informs the service desk about the expired item and where they found it. Employees then clean up the aisle and throw out the expired food.
              </p>
              <h6 className="w3-opacity"><i>Proposed solution</i></h6>
              <p>
                The FoodSaver idea involves keeping track of item expiry and location within a store. Thus, store managers and department heads will be notified of items that are approaching their best before date and where they might be located. Employees can then pull out these items and display them for a significant discount to sell the item before it expires.
              </p>
              <h6 className="w3-opacity"><i>Business Case</i></h6>
              <p>
                The FoodSaver project can provide significant savings and generate untapped revenue for retailers. By informing store managers when items approach their best before date, it is easy for store managers to pre-order products for maximum shelf life, which increases the probability of selling the product at full price. Furthermore, store managers can witness significant cost savings by avoiding the transportation and logistical costs involved in throwing out expired food (especially in cities such as Vancouver and Paris where a food waste tax is being planned). Finally, selling food at discounted prices drives foot traffic and increases the probability that a customer will purchase a full-priced item as they move in the store.
              </p>
              <hr />
            </div>
          </div>

          <div className="w3-container w3-card w3-white w3-margin-top">
            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-laptop w3-margin-right w3-xxlarge w3-text-teal" />UW Prod Con</h2>
            <div className="w3-container">
              <h5 className="w3-opacity"><i className="fa fa-terminal fa-fw w3-margin-right" /><b>Hosted by Microsoft</b></h5>
              <p>
                Prod Con is a networking event for product managers to talk about their experiences in the industry. The event also features a Product Case Competition where teams of up to 4 members will pitch their product ideas to a panel of judges.
              </p>
              <hr />
            </div>
          </div>
          {/* End Main Content */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Page Container */}
    </div>
  );
}

export default Extracurriculars;