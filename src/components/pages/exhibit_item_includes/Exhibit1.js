import React, { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';

import './css/Exhibit1.css'

function Exhibit1({ props }) {
   
    // const location = useLocation()
    // const products = location.state
  
    // const [product, setProduct] = useState([])
      
    // console.log(products)
    // useEffect (() => {
    //    products.then(productData => {
    //      console.log(productData)
    //         setProduct(productData);
    //     })
        
    // }, [products])
    return (
        
        <div className="Exhibit1">
            <div className="banner-img">
                <div className=" banner-text">
                    <span className="fs-1 fw-bold font-monospace text-light">Exhibit1</span>
                </div>
            </div>

        </div>
        // <Link to='/Exhibits/Exhibit1/Product1'>
        //     <div>
        //         <h1>Product List</h1>
        //     </div>
        // </Link>
        
    );
}

export default Exhibit1;