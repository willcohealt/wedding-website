import React from 'react'; 
import background from "../assets/background.jpg"; 
import "../styles/main.css"; 

function Travel(){

	return (
		<React.Fragment>
		<div className=""> 
			<img className="headerImage" src={background} alt="poge"/>
		</div>
		<div className="headerText">
		Getting Here

		</div>
		<div className="row"> 
		  <div className="columnL">
		  	<div className="subheader">
		  	  By Sea
		  	</div>
		  	<div>
		  	  <div className="info"> The Pied Piper ferry out of Falmouth is our favorite option for the weekend. With a bar onboard and service directly into downtown Edgartown, this is Sarah and Will's preferred method of arriving to the island. </div>
		  	  <div className="info">Most visitors take the ferry service connecting the Vineyard and the mainland. The Steamship Authority makes more than 25 trips a day to Martha's Vineyard from Woods Hole during the summer season. It remains the only ferry transporting cars and passengers. </div>
			  <div className="info">So if you're bringing your car over to the island, plan to get to the Woods Hole terminal in Cape Cod, MA, at least 30 minutes before your scheduled departure. Another important caveat to keep in mind, being the only car-ferry provider, the Steamship Authority service sells out even further in advance than the passenger-only ferries. Tickets for summer 2023 are already on sale!</div>
		  	</div>
		   </div>
		  <div className="column"> 
		  	<div className="subheader">
		  	  By Air
		  	</div>
		  	<div>
		  	  <div className="info">If flying is your preferred method, Cape Air which offers year-round flights from Boston and New York. The Martha’s Vineyard Airport code is MVY and the airport is located in the middle of the island, at 71 Airport Road, West Tisbury. Taxi and car service pick ups are available from the airport. The airport also offers on-site car rentals trough Avis, Budget, and Hertz. </div>

			  <div className="info">Many other major airlines, including JetBlue, Delta and American Airlines offer seasonal flights to and from the Vineyard and many major east coast cities, including Boston, NY, Philadelphia and D.C. </div>

			  <div className="info">Tradewind Aviation and Jannus Air Charters offer shared and private charter flights to and from the Vineyard year-round.</div>
		  	</div>
		  </div>
		</div>
		</React.Fragment>
		); 
}

export default Travel; 