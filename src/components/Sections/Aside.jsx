import React from "react";


import Article from '../Cards/Article.jsx';
import Social from '../Cards/Social.jsx';
import Surreal from '../Cards/Surreal.jsx';
import CaseStudy from '../Cards/CaseStudy.jsx';
import Croatel from '../Cards/Croatel.jsx';


const Aside = () => {
	return (
        <aside>
            <Article />
            <Social />
            <Surreal />
            <CaseStudy />
            <Croatel />
        </aside>
	);
};

export default Aside;