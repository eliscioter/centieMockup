import React from 'react'
import { Link } from 'react-router-dom'
export default function Carousel({ prop }) {
  return (
    <div  className="carousel carousel-fade slide" id="bannerCarousel" data-bs-ride="carousel">
        <div className="carousel-inner">
            {
                prop.map((bannerImg, idx) => 
                    <>
                    <Link 
                    to={`/Exhibits/ProductList/${bannerImg.author}/${idx}`}
                    state={{
                        banner: bannerImg.download_url
                    }}>
                        <div key={idx} className={idx === 0 ? 'carousel-item active' : 'carousel-item'} >
                            <img src={bannerImg.download_url} className="d-block w-100 banner-Img" alt={bannerImg.author} />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>{bannerImg.author}</h3>
                            </div>
                        </div>
                    </Link>
                    
                    </>
                    
                )
            }
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
)
}
