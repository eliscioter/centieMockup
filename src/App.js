import React from 'react';
import axios from 'axios';


import Navbar from './components/includes/Navbar';
import Home from './components/pages/home_includes/Home';
import Exhibits from './components/pages/exhibits_includes/Exhibits';
import Gallery from './components/pages/Gallery';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/includes/Footer';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Exhibit1 from './components/pages/exhibit_item_includes/Exhibit1';
import Products from './components/pages/Product1';

const fetchBannerData = async () => {
  return await axios.get('https://picsum.photos/v2/list?page=1&limit=4')
  .then(({data}) => {
      return data;
  })
  .catch(err => {
      console.log(err)
  })
}
const fetchProductData = async () => {
  return await axios.get('https://fakestoreapi.com/products?limit=8')
  .then(({data}) => {
      return data;
  })
  .catch(err => {
      console.log(err)
  })
}
const fetchInnovatorData = async () => {
  return await axios.get('https://randomuser.me/api/?results=3')
  .then(({data}) => {
      return data;
  })
  .catch(err => {
      console.log(err)
  })
}

function App() {
  return (
    <div className="container-fluid px-0">
      <Router path='/'>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home exhibit={fetchBannerData()} feat_product={fetchProductData()} feat_innovator={fetchInnovatorData()} />}/>
            <Route path='/Exhibits' element={<Exhibits exhibits={fetchBannerData()} />}/>
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
