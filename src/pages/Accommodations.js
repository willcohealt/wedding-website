import React from "react";
import "../styles/main.css" 
import greybarn from "../assets/greybarn.jpeg"; 

function Accommodations() {

	// return (
	// 	<React.Fragment>
	// 	<div class="column">
	// 	  <div class="row">
	// 	  	<div class="hotelName"> Harborview Hotel </div>
	// 	  </div>

	// 	</div>

	// 	<div class = "column">
	// 	  <div class="row">
	// 	    <div class="hotelName"> Harborview Hotel </div>
	// 	  </div>

	// 	</div>
	// 	</React.Fragment>
	// 	); 

	return (
		<React.Fragment>

		<div >
		  <img className="headerImage" src={greybarn} alt="greybarn"/>
		</div>

		<div className="headerText">
		Where to Stay
		</div>

		<div className="row"></div>
		< div className="info"> There are plenty of places to stay around the island, but the festivities will be centered in Edgartown. We recommmend staying in town at one of the below hotels, or reaching out to <a href="mailto:erin@pointbrealty.com" className="customLink">Erin</a> for information about rental homes on the island. </div>


		<div className="row"> </div>
		<div className="row">
		  <div className="columnL">
		    <div className="hotelName">Harborview Hotel - $$$$</div>
		    <div className="hotelAddress">131 North Water Street</div>
		    <div className="hotelAddress">Edgartown, MA 02539</div>
		    <div className="hotelPhone">(877) 624-7992</div>
		    <div className="hotelAddress"> Downtown Edgartown </div>
		  </div>
		  <div className="column">
		    <div className="hotelName">Winnetu Oceanside Resort Hotel - $$$$</div>
		    <div className="hotelAddress">31 Dunes Road</div>
		    <div className="hotelAddress">Edgartown, MA 02539</div>
		    <div className="hotelPhone">(508) 627-4747</div>
		    <div className="hotelAddress"> Beachfront resort, shuttle to Edgartown </div>
		  </div>
		</div>

		<div className="row">
		  <div className="columnL">
		    <div className="hotelName">Edgar Hotel - $$$</div>
		    <div className="hotelAddress">222 Upper Main Street</div>
		    <div className="hotelAddress">Edgartown, MA 02539</div>
		    <div className="hotelPhone">(508) 379-2100</div>
		    <div className="hotelAddress"> A quick walk into town </div>
		  </div>
		  <div className="column">
		    <div className="hotelName"> Vineyard Square Hotel - $$</div>
		    <div className="hotelAddress">38 North Water Street</div>
		    <div className="hotelAddress">Edgartown, MA 02539</div>
		    <div className="hotelPhone">(508) 627-4711</div>
		    <div className="hotelAddress"> Close to the Chappy Ferry! </div>
		  </div>
		</div>

		<div className="row">
		  <div className="columnL">
		    <div className="hotelName">  The Edgartown Inn - $$$</div>
		    <div className="hotelAddress">56 North Water Street</div>
		    <div className="hotelAddress">Edgartown, MA 02539</div>
		    <div className="hotelPhone">(508) 939-4005</div>
		    <div className="hotelAddress"> Close to the Chappy Ferry!  </div>
		  </div>
		  <div className="column">
		    <div className="hotelName"> The Harborside Inn - $$</div>
		    <div className="hotelAddress">3 S Water St</div>
		    <div className="hotelAddress">Edgartown, MA 02539</div>
		    <div className="hotelPhone">(508) 627-4321</div>
		    <div className="hotelAddress"> Close to the ceremony site!  </div>
		  </div>
		</div>

		<div className="row">
		  <div className="columnL">
		    <div className="hotelName">The Richard - $$$</div>
		    <div className="hotelAddress">104 Main Street</div>
		    <div className="hotelAddress">Edgartown, MA 02539</div>
		    <div className="hotelPhone">(508) 782-0042</div>
		    <div className="hotelAddress"> Downtown Edgartown</div>
		  </div>
		  <div className="column">
		    <div className="hotelName"> The Sydney - $$$</div>
		    <div className="hotelAddress">22 Winter Street</div>
		    <div className="hotelAddress">Edgartown, MA 02539</div>
		    <div className="hotelPhone">(508) 939-9299</div>
		    <div className="hotelAddress"> Downtown Edgartown </div>
		  </div>
		</div>

		<div className="row">
		  <div className="columnL">
		    <div className="hotelName">The Christopher - $$$</div>
		    <div className="hotelAddress">24 South Water Street</div>
		    <div className="hotelAddress">Edgartown, MA 02539</div>
		    <div className="hotelPhone">(508) 627-4784</div>
		    <div className="hotelAddress"> Downtown Edgartown</div>
		  </div>
		  <div className="column">
		    <div className="hotelName"> The Ashley Inn - $$</div>
		    <div className="hotelAddress">129 Main St</div>
		    <div className="hotelAddress">Edgartown, MA 02539</div>
		    <div className="hotelPhone">(508) 627-9655</div>
		    <div className="hotelAddress"> Downtown Edgartown </div>
		  </div>
		</div>

		</React.Fragment>
		)


}

export default Accommodations; 



// <div className="hotelAddress"></div>

