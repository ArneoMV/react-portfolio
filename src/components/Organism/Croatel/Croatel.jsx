import React from "react";
import IMAGES from '../../../utilities/images.js';
import './_croatel.scss';

const Croatel = () => {
	return (
		<div className="card croatel">
			<h2>Croatel</h2>
			<div className="row">
				<div className="chip"><p>UI/UX</p></div>
				<div className="chip"><p>Web Development</p></div>
			</div>
			<img src={IMAGES.croatel} alt="croatel" />
		</div>
	);
};

export default Croatel;