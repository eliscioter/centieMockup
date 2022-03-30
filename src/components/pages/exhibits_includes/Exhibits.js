import React from 'react';
import { Link } from 'react-router-dom';
import './css/Exhibits.css'

// import Exhibit1 from '../Exhibits/Exhibit1';

function Exhibits() {
    return (
        <div className="main">
            <div className="banner-img">
                <div className=" banner-text">
                    <span className="fs-1 fw-bold font-monospace text-light">Exhibits</span>
                </div>
            </div>
        </div>
        // <>
        // <Link to='/Exhibits/Exhibit1'>
            
        //     <div className='card shadow'>
        //         <div className='card-body'>First Exhibit</div>
        //     </div>
        // </Link>
        // </>
        
    );
    
}

export default Exhibits;