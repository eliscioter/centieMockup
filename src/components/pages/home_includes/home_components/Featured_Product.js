import React from 'react'

export default function FeaturedProduct({ prop }) {
  return (
    <div className="container my-5 p-5">
        <div className="text-center mb-5">
            <span className="fs-1 text-center border-warning border-2 border-bottom">Featured Products</span>
        </div>
        <div className="row g-5">
            {
                prop.map((product, idx) => 
                
                    <div key={idx} className="col-6 col-md-4 col-lg-3">
                        <div className="card card-shadow prod-container">
                            <img src={product.image} alt={product.description} className="w-100 img-thumbnail prod-img" />
                            <div className="card-body text-truncate">
                                <span>{product.title}</span>
                            </div>
                        </div>
                    </div>
                    
                )
            }
        </div>
    </div>
  )
}
