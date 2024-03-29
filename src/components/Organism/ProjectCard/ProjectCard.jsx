
import React from 'react';
import './_projectCard.scss';

const ProjectCard = ({ className, title, img, chip1, chip2, description, onClick }) => {
	return (
        <div className={`projectCard  ${className}`} onClick={onClick}>
            <figure><img src={img}></img></figure>

            <div className="project__info">
                <h3>{title}</h3>
                <div className="card__row">
                    <div className="chip"><p>{chip1}</p></div>
                    <div className="chip"><p>{chip2}</p></div>
                </div>
                <p>{description}</p>
            </div>

        </div>
	);
};	
export default ProjectCard;
