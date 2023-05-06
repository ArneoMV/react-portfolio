import React from "react";


import IMAGES from '../../utilities/images.js';



const Dashboard = () => {
	return (
		<div className="card dashboartd">

			<h2>Wine Dashboard</h2>
			<div className="row">
				<div className="chip"><p>UI/UX</p></div>
			</div>
			<p>XYZ Winery is a mid-sized winery that produces a range of high-quality wines. 
				The winery has been in business for several years and has a well-established customer base.</p>
			<figure><img src={IMAGES.wine}></img></figure>

		</div>
	);
};	
export default Dashboard;