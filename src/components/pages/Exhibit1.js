import React from 'react';

import {Link} from 'react-router-dom';

function Exhibit1() {
    return (
        <Link to='/Exhibits/Exhibit1/Product1'>
            <div>
                <h1>Product List</h1>
            </div>
        </Link>
        
    );
}

export default Exhibit1;