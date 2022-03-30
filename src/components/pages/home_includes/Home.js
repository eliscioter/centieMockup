import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Home.css'

import Carousel from './home_components/Carousel'
import FeaturedProducts from './home_components/Featured_Product'
import FeaturedInnovator from './home_components/Featured_Innovator'
import Articles from './home_components/Articles'


export const fetchBannerData = async () => {
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




function Home() {
    const [banner, setBanner] = useState([])
    const [product, setProduct] = useState([])
    const [innovator, setInnovator] = useState([])
    
    useEffect (() => {
        fetchBannerData().then(bannerData => {
            setBanner(bannerData);

        })
        fetchProductData().then(prodData => {
            setProduct(prodData)     
        })
        fetchInnovatorData().then(innovatorData => {
            setInnovator(innovatorData.results)
            // setInnovator(JSON.stringify(innovatorData, null, 2) || 'no product found');

        })
    }, [])
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