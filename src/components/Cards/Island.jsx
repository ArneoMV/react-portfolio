import React from "react";
import IMAGES from '../../utilities/images.js';

const Islands = () => {
	return (
		<div className="card islands">

			<h2>Find Perfect Adriatic Coast Accommodation</h2>
			<div className="card__row">
				<div className="chip"><p>To Islands Travel</p></div>
				<div className="chip"><p>UI/UX</p></div>
				<div className="chip"><p>2022</p></div>
			</div>
			<div className="card__row">
				<figure><img src={IMAGES.Travel_01}></img></figure>
				<figure><img src={IMAGES.Travel_mobile_01}></img></figure>
			</div>
			
		</div>
	)
};

export default Islands;



