import React from "react";

import HRT from '../Cards/HRT.jsx';
import Island from '../Cards/Island.jsx';
import HNK from '../Cards/HNK.jsx';
import About from '../Cards/About.jsx';
import Experience from '../Cards/Experience.jsx';
import Dashboard from '../Cards/Dashboard.jsx';



const Section_2 = () => {
	return (
		<>
		<section className='container'>
			<div className='row'>
				<div className="collumn">
					<HRT />
					<Island />
					<HNK />
				</div>
				<div className="collumn">
					<About />
					<Experience />
				</div>
			</div>
			{/* <Dashboard /> */}
			
		</section>
		</>



		
	);
};

export default Section_2;