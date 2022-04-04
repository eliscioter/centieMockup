import React, { useState, useEffect } from 'react';
import './css/Exhibits.css'

import ExhibitComponent from './exhibits_components/ExhibitComponent'
import exhibitsBanner from '../../images/exhibits_banner.png'
// import exhibits from '../home_includes/Home'
// import Exhibit1 from '../Exhibits/Exhibit1';

function Exhibits({ exhibits }) {

    const [exhibit, setExhibit] = useState([])

    useEffect(() => {
        exhibits.then(exhibit =>{
            setExhibit(exhibit)
        })
    }, [exhibits])

    return (
        <div className="Exhibit">
            <div className="banner-img" style={{backgroundImage: `url(${exhibitsBanner})`}}>
                <div className=" banner-text">
                    <span className="fs-1 fw-bold font-monospace text-light">Exhibits</span>
                </div>
            </div>

            <div className="p-5">
                <ExhibitComponent exhibits={exhibit}/>
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