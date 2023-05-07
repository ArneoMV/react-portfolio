import React from "react";
import Logo from '../Cards/Logo.jsx';
import Title from '../Cards/Title.jsx';

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