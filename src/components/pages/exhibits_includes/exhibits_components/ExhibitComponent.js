import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const fetchExhibit1Data = async () => {
  return await axios.get('https://fakestoreapi.com/products?limit=8')
  .then(({data}) => {
    console.log(data + "sdf")
      return data;
  })
  .catch(err => {
      return err
  })
}

export default function ExhibitComponent({ exhibits }) {

  return (
    <div className="container">
      <div className="row g-3">
        {
          exhibits.map((exhibit, idx) => (
            <div key={idx} className="col-md-4 col-lg-3">
              <Link to={
                  {
                    pathname:'/Exhibits/Exhibit1',
                    state: fetchExhibit1Data() 
                  }
                }>
                <div className="card text-dark bg-image hover-zoom rounded">
                  <img src={exhibit.download_url} alt={exhibit.author} className="rounded img-fluid"/>
                  <div className="card-body text-truncate">
                    {exhibit.author}
                  </div>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}
