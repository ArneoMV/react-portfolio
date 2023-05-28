import React from "react";
import IMAGES from '../../utilities/images.js';

const Experience = () => {
	return (
        <div className="experience__card">
            <div className="card__row">
                <h4>{company}</h4>
                <img src={IMAGES.arrow} alt="open" />
            </div>
            <div className="experience__info">
                <div className="info">
                    <p>{postition}</p>
                    <div className="info__row">
                        <p>{year}</p>
                        <p>{location}</p>
                    </div>	
                </div>
            </div>
        </div>	

	)
};

export default Experience;