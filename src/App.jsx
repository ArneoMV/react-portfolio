import React from 'react'

import Styles from './styles/scss/index.scss'

import Section_1 from './components/Sections/Section_1.jsx'
import Section_2 from './components/Sections/Section_2.jsx'
import Aside from './components/Sections/Aside.jsx'
import Section_3 from './components/Sections//Section_3.jsx'
import Footer from './components/Sections/Footer.jsx'

// D:\GIT\react-portfolio-website-1\src\App.jsx

const App = () => {
  return (
    <main>
      <div className='container'>
        <div className='row'>
          <div className='col-7-sm col-5-md col-5-lg'>
            <Section_1 />
            <Section_2 />
          </div>
          <div className='col-7-sm col-2-md col-2-lg'>
            <Aside />
          </div>
        </div>
        <Section_3 />
        <Footer />
      </div>
    </main>

  )
}

export default App