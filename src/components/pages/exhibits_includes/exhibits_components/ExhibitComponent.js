import React from 'react'
import { Link } from 'react-router-dom';




export default function ExhibitComponent({ exhibits }) {
  return (
    <div className="container">
      <div className="row g-3">
        {
          exhibits.map((exhibit, idx) => {
            
            return <div key={idx} className="col-md-4 col-lg-3">
              <Link 
                to={`/Exhibits/ProductList/${exhibit.author}/${idx}`}
                state={{ 
                  banner: exhibit.download_url, 
                }} 
                  
                >
                <div className="card text-dark bg-image hover-zoom rounded">
                  <img src={exhibit.download_url} alt={exhibit.author} className="rounded img-fluid"/>
                  <div className="card-body text-truncate">
                    {exhibit.author}
                  </div>
                </div>
              </Link>
            </div>
           
          })
        }
      </div>
    </div>
  )
}
