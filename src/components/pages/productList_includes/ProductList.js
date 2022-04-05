import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import axios from 'axios'

import './css/ProductList.css'

    let category;
    const fetchExhibit1Data = async (id) => {
        if (Number(id) === 0) {
            category = 'jewelery'
        } else if (Number(id) === 1) {
        category = 'electronics'
        } else if (Number(id) === 2) {
        category = "men's clothing"
        } else if (Number(id) === 3) {
        category = "women's clothing"
        }
        let baseUrl = `https://fakestoreapi.com/products/category/${category}`;
        return await axios.get(baseUrl)
        .then(({data}) => {
            return data;
        })
        .catch(err => {
            return err
        })
    }

function ProductList() {
    const { handler, id } = useParams();
    const prodBanner = useLocation().state.banner;
    

    const [products, setProduct] = useState([])

    useEffect (() => {
        fetchExhibit1Data(id).then(productData => {
            setProduct(productData);
        })
        
    }, [id])
    return (
        
        <div className="ProductList">
            <div className="banner-img">
                <img src={prodBanner} alt={handler} />
                {/*  <div className=" banner-text">
                    <span className="fs-1 fw-bold font-monospace text-light">{handler}</span>
                </div> */}
            </div>

            <section className="p-md-5 my-3">
                <div className="container">
                    
                    <div className="row g-5">
                        {
                            products.map((product, idx) => 
                            
                                <div key={idx} className="col-6 col-md-4 col-lg-3">
                                    <Link 
                                    to={`/Exhibits/ProductList/Product/${product.title}`}
                                    state={{
                                        image: product.image,
                                        description: product.description,
                                    }}>
                                        <div className="card card-shadow prod-container img-hover-zoom">
                                            <img src={product.image} alt={product.description} className="w-100 img-thumbnail prod-img" />
                                            <div className="card-body text-truncate">
                                                <span className="text-dark">{product.title}</span>
                                            </div>
                                        </div>
                                    </Link>
                                    
                                </div>
                                
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
        // <Link to='/Exhibits/Exhibit1/Product1'>
        //     <div>
        //         <h1>Product List</h1>
        //     </div>
        // </Link>
        
    );
}

export default ProductList;