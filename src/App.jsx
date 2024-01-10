import React from 'react';
// import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'; // Zamijenite Switch s Routes

import Header from './components/Sections/Header.jsx';
import Section_1 from './components/Sections/Section_1.jsx';
import Section2 from './components/Sections/Section2.jsx';
import Aside from './components/Sections/Aside.jsx';
import Footer from './components/Sections/Footer.jsx';

import Home from './components/Page/Home/Home.jsx';
import Vespera from './components/Page/Vespera/Vespera'; 
import Wine from './components/Page/Wine/Wine'; 
import Popcoin from './components/Page/Popcoin/Popcoin'; 

import './styles/index.scss';

const App = () => {
  return (
    <main>
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
    </main>
  );
};

export default App;