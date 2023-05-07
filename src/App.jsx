import React from 'react'

import Styles from './styles/scss/index.scss'

import Header from './components/Sections/Header.jsx'
import Section_1 from './components/Sections/Section_1.jsx'
import Aside from './components/Sections/Aside.jsx'
import Section_2 from './components/Sections/Section_2.jsx'
import Footer from './components/Sections/Footer.jsx'

// D:\GIT\react-portfolio-website-1\src\App.jsx

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
        <Section_2 />
        <Footer />
      </div>
    </main>

  )
}

export default App