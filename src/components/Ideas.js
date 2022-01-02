import React, { Component } from 'react';

class Ideas extends Component {
  render() {

    if(this.props.data){
      var ideas = this.props.data.ideas.map(function(idea){
        return <li key={idea.url}>
            <div>
               <h3>{idea.title}</h3>
               <p><a href={idea.url} target="_blank">{idea.url}</a></p>
            </div>
         </li>
      })
    }

    return (
      <section id="ideas">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Product Ideas</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {ideas}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Ideas;
