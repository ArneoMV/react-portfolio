import React from "react";
import IMAGES from '../../utilities/images.js';

const Islands = () => {
	return (
		<div className="card islands">

			<h2>To Islands Travel</h2>
			<div className="row">
				<div className="chip"><p>UI/UX</p></div>
			</div>
			<p>XYZ Winery is a mid-sized winery that produces a range of high-quality wines. 
				The winery has been in business for several years and has a well-established customer base.</p>
			<div className="row">
				<figure><img src={IMAGES.Travel_01}></img></figure>
				<figure><img src={IMAGES.Travel_mobile_01}></img></figure>
			</div>
			
		</div>
	)
};

export default Islands;



