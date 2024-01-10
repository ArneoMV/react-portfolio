
import React from 'react';
import './_home.scss';

import Header from '../../Sections/Header.jsx'
import Section_1 from '../../Sections/Section_1.jsx'
import Section2 from '../../Sections/Section2.jsx'
import Aside from '../../Sections/Aside.jsx'
import Footer from '../../Sections/Footer.jsx'


const Home = () => {
    return (
        <div className='container'>
          <div className='row'>
            <div className='col-7-sm col-5-md col-5-lg'>
              <Header />
              <Section_1 />
            </div>
            <div className='col-7-sm col-2-md col-2-lg'>
              <Aside />
            </div>
          </div>
          <Section2 />
          <Footer />
        </div>
    );
  };
  
  export default Home;
  