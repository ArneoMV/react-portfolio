import React from "react";
import IMAGES from '../../../utilities/images.js';
import './_social.scss';


const Social = () => {
	return (
		<div className="card social">
			<div className="social__img">
				<img src={IMAGES.envelope} />
				<img src={IMAGES.dribbble} />
				<img src={IMAGES.github} />
				<img src={IMAGES.instagram} />
				<img src={IMAGES.linkedin} />
				<img src={IMAGES.medium} />
			</div>
		</div>
	);
};

export default Social;