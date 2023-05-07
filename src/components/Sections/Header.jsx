import React from "react";
import Logo from '../Cards/Logo.jsx';
import Title from '../Cards/Title.jsx';

const Section_1 = () => {
	return (
		<section className="section_1">
			<div className='container'>
				<div className='row'>
					<Logo />
					<Title />
				</div>
			</div>
		</section>
	);
};

export default Section_1;