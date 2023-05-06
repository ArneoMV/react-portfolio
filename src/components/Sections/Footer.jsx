import React from "react";

import IMAGES from '../../utilities/images.js';


const Footer = () => {
	return (
        <>
            <footer>
                <h3>Arneo</h3>
                <div className="footer_social">
                    <img src={IMAGES.envelope} />
                    <img src={IMAGES.dribbble} />
                    <img src={IMAGES.github} />
                    <img src={IMAGES.instagram} />
                    <img src={IMAGES.linkedin} />
                    <img src={IMAGES.medium} />
                </div>
            </footer>
        </>
	);
};

export default Footer;