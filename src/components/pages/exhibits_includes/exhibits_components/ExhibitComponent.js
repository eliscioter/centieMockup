import React from 'react'

export default function ExhibitComponent({ exhibits }) {

  return (
    <div className="container">
      <div className="row g-3">
        {
          exhibits.map((exhibit, idx) => (
            <div key={idx} className="col-md-4 col-lg-3">
              <div className="card">
                <img src={exhibit.download_url} alt={exhibit.author} />
                <div className="card-body text-truncate">
                  {exhibit.author}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
