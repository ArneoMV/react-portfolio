import React from "react";

import IMAGES from '../../utilities/images.js';

const Vespera = () => {
	return (
		<div className="card vespera">
			<h2>Vespera</h2>
			
			<div className="row">
				<div className="chip"><p>UI/UX</p></div>
				<div className="chip"><p>Web Development</p></div>
			</div>
			<p>Vespera Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, quod.</p>
			<div className="row">
				<figure>
					<img src={IMAGES.vespera} alt="vespera" />
				</figure>
				
			</div>
			
		</div>
	)
};

export default Vespera;