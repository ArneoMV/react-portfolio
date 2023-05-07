import React from "react";

import HRT from '../Cards/HRT.jsx';
import Island from '../Cards/Island.jsx';
import HNK from '../Cards/HNK.jsx';
import About from '../Cards/About.jsx';
import Social from '../Cards/Social.jsx';
import CaseStudy from '../Cards/CaseStudy.jsx';



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