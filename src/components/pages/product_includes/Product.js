import React from 'react';
import { useParams, useLocation } from 'react-router-dom'

import './css/Product.css'

function Product() {
    const { handler } = useParams();
    const { image, description } = useLocation().state;

    return (
        <div className="Product">
            <div className="container p-5">
                <div className="row">
                <figcaption className="fs-5 p-3">{handler}</figcaption>
                    <div className="col-md-6">
                        <div className="container text-center">
                            <img src={image} alt={description} className="img-fluid w-100" style={{height: '300px'}}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p>
                            <span className="fw-bold">Description:</span> <br />
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;