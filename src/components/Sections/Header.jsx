import React from "react";
import Logo from '../Organism/Logo/Logo.jsx';
import Title from '../Organism/Title/Title.jsx';

const Header = () => {
	return (
		<section className="header">
			<div className='container'>
				<div className='row'>
					<Logo />
					<Title />
				</div>
			</div>
		</section>
	);
};

export default Header;