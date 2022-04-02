import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Home.css'

import Carousel from './home_components/Carousel'
import FeaturedProducts from './home_components/Featured_Product'
import FeaturedInnovator from './home_components/Featured_Innovator'
import Articles from './home_components/Articles'


function Home({ exhibit, feat_product, feat_innovator }) {
    const [banner, setBanner] = useState([])
    const [product, setProduct] = useState([])
    const [innovator, setInnovator] = useState([])
    
    useEffect (() => {
       exhibit.then(bannerData => {
            setBanner(bannerData);
        })
        feat_product.then(prodData => {
            setProduct(prodData)     
        })
        feat_innovator.then(innovatorData => {
            setInnovator(innovatorData.results)
            // setInnovator(JSON.stringify(innovatorData, null, 2) || 'no product found');

        })
    }, [exhibit, feat_innovator, feat_product])
    return (
        
        <div className="main">
            
            {/* banner carousel */}
            <Carousel prop={banner} />
            {/* featured products */}
            <FeaturedProducts prop={product} />
            {/* featured innovators */}
            <FeaturedInnovator prop={innovator} />
            {/* articles */}
            <Articles prop={banner} />
        </div>
    );


}

export default Home;