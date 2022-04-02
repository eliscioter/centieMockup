import React from "react";

import {Link} from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa'

import logo from '../images/logo.png'
import '../includes_css/Navbar.css'

function Nabvar() {
    
    return (
        <div className="container-fluid nav-color px-0 Navbar">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid mx-lg-3 text-light">
                    <Link className="navbar-brand me-1" to='/Home'><img className='nav-logo' src={logo} alt='National University Seal'/></Link>
                    <span>NU Wave <br/>Creative &#38; Technology Hub</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="container mx-auto">
                            <div className="row">
                                <div className="col-sm-9">
                                    <ul className="navbar-nav justify-content-center">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to='/Exhibits'>Exhibits</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to='/Gallery'>Gallery</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to='/About'>About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to='/Contact'>Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-3">
                                    <ul className="navbar-nav justify-content-end py-2">
                                        <li className="nav-item ps-1 pe-2">Sign in</li>
                                        <li className="nav-item px-1 me-3 vl border rounded-3">Sign up</li>
                                        <li className="nav-item px-2 bg-secondary pb-1 border border-secondary rounded-circle"><FaShoppingCart/></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
    
}

export default Nabvar;