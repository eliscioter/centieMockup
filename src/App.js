import React from 'react';

import Navbar from './components/includes/Navbar';
import Home from './components/pages/home_includes/Home';
import Exhibits from './components/pages/exhibits_includes/Exhibits';
import Gallery from './components/pages/Gallery';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/includes/Footer';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Exhibit1 from './components/pages/Exhibit1';
import Products from './components/pages/Product1';

function App() {
  return (
    <div className="container-fluid px-0">
      <Router path='/'>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Exhibits' element={<Exhibits />}/>
            <Route path='/Exhibits/Exhibit1' element={<Exhibit1 />}/>
            <Route path='/Exhibits/Exhibit1/Product1' element={<Products />}/>
            <Route path='/Gallery' element={<Gallery />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Contact' element={<Contact />}/>
          </Routes>
        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
