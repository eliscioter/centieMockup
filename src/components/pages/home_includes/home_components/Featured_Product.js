import React from 'react'
import { Link } from 'react-router-dom';
export default function FeaturedProduct({ prop }) {
  return (
    <div className="container my-5 p-md-5">
        <div className="text-center mb-5">
            <span className="fs-1 text-center border-warning border-2 border-bottom">Featured Products</span>
        </div>
        <div className="row g-5">
            {
                prop.map((product, idx) => 
                
                    <div key={idx} className="col-6 col-md-4 col-lg-3">
                        <Link
                        to={`/Exhibits/ProductList/Product/${product.title}`}
                        state={{
                            image: product.image,
                            description: product.description,
                        }}
                        >
                            <div className="card card-shadow prod-container img-hover-zoom">
                                <img src={product.image} alt={product.description} className="w-100 img-thumbnail prod-img " />
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
  )
}
