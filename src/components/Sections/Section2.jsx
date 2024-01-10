import React from "react";
import wine from '../../image/picture/Wine.jpg';
import vespera from '../../image/picture/Vespera.png';
import popcoin from '../../image/picture/popcoin.png';

import ProjectCard from '../Organism/ProjectCard/ProjectCard.jsx';
import Contact from '../Organism/Contact/Contact.jsx';

const Section2 = () => {

  return (
    <div className="section_2">
      <ProjectCard
        className={'vespera'}
        title={'Vespera'}
        img={vespera}
        chip1={'Website design'}
        chip2={'2021'}
        description={'A modern and elegant website design that captures the essence of a furniture salon and showcases its products in the best possible way.'}
      />
      <ProjectCard
        className={'wine'}
        title={'Wine'}
        img={wine}
        chip1={'Dashboard'}
        chip2={'2021'}
        description={'Experience the world of wine through an interactive dashboard designed to showcase the company\'s products and services.'}
      />
      <ProjectCard
        className={'popcoin'}
        title={'Popcoin'}
        img={popcoin}
        chip1={'Website design'}
        chip2={'2021'}
        description={'A modern and elegant website design that captures the essence of a furniture salon and showcases its products in the best possible way.'}
      />
      <Contact />
    </div>
  );
};

export default Section2;
