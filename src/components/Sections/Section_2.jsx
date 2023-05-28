import React from "react";
S
import wine from '../../image/picture/Wine.jpg';
import vespera from '../../image/picture/Vespera.png';
import popcoin from '../../image/picture/popcoin.png';


import ProjectCard from '../Cards/ProjectCard.jsx';
import Contact from '../Cards/Contact.jsx';



const Section_2 = () => {
	return (
		<div className="section_2">
			<ProjectCard 
				className={'wine'}
				title={'Wine'}
				img={wine}
				chip1={'Dashboard'}
				chip2={'2021'}
				description={'Experience the world of wine through an interactive dashboard designed to showcase the companys products and services.'}
			/>
			<ProjectCard 
				className={'vespera'}
				title={'Vespera'}
				img={vespera}
				chip1={'Website design'}
				chip2={'2021'}
				description={'A modern and elegant website design that captures the essence of a furniture salon and showcases its products in the best possible way.'}
			/>
			<ProjectCard 
				className={'popcoin'}
				title={'Popcoin'}
				img={popcoin}
				chip1={'App design'S}
				chip2={'2021'}
				description={'Keep your crypto-currency organized and easily accessible with our sleek and intuitive wallet application design.'}
			/>

			<Contact />
		</div>
	);
};

export default Section_2;