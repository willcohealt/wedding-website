
import React from 'react';
import landing from "../assets/Crest.png"
import "../styles/main.css"; 
import proposal from "../assets/landing.jpg"

function Home () {
  return (
    <React.Fragment>
    <div className="">
      <img className="headerImageShrunk" src={landing} alt="landing pic"/>
    </div>
    <div className="headerScript">
      Sarah Jordyn Lindenberg
    </div>
    <div className="headerScript">
      and
    </div>
    <div className="headerScript">
      William Edward Cohen
    </div>
    <div className="subheader">
      June 17, 2023
    </div>
    <div className="subheader"> 
      Edgartown, Marthas Vineyard
    </div>

    <div>
      <img className="headerImageFullWidth" src={proposal} alt="proposal"/>
    </div>
    </React.Fragment>
    );
}
  
export default Home;