
import React from "react";


import IMAGES from '../../utilities/images.js';



const ProjectCard = () => {
	return (
		<div className="card projectCard">

            <figure><img src={IMAGES.wine}></img></figure>

            <div className="project__info">
                <h2>Wine</h2>
                <div className="row">
                    <div className="chip"><p>Website design</p></div>
                    <div className="chip"><p>2021</p></div>
                </div>
                <p>XYZ Winery is a mid-sized winery that produces a range of high-quality wines. 
                    The winery has been in business for several years and has a well-established customer base.</p>
            </div>

		</div>
	);
};	
export default ProjectCard;