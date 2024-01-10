import React from "react";
import './_poster.scss';
import IMAGES from '../../../utilities/images.js';

const Poster = () => {
	return (
		<div className="poster">
			<img className="poster__image" src={IMAGES.poster} />
		</div>
	)
};

export default Poster;