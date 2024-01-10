
import React from "react";
import IMAGES from '../../../utilities/images.js';
import './_contact.scss';


const Contact = () => {
	return (
		<div className="contact">

            <div className="chip_copy">
                <p>arneo.marinvincetic@gmail.com</p>
                <img src={IMAGES.copy} alt="copy" />
            </div>
            <h5>Let's collaborate and create something new</h5>

		</div>
	);
};	
export default Contact;