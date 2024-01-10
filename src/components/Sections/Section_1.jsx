import React from "react";

import HRT from '../Organism/HRT/HRT.jsx';
import Island from '../Organism/Island/Island.jsx';
import HNK from '../Organism/HNK/HNK.jsx';
import About from '../Organism/About/About.jsx';
import Social from '../Organism/Social/Social.jsx';
import CaseStudy from '../Organism/CaseStudy/CaseStudy.jsx';



const Section_1 = () => {
	return (
		<div className="section_1">
			<section className='container'>
				<div className='row'>
					<div className="collumn">
						<HRT />
						<Island />
					</div>
					<div className="collumn">
						<About />
						<Social />
						<CaseStudy />
					</div>
				</div>
				<HNK />
			</section>
		</div>



		
	);
};

export default Section_1;