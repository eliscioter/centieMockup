import React from "react";

import "../includes_css/Footer.css";
import centie_footer from "../images/centie_footer.png";
import { Link } from "react-router-dom";
import {FaFacebook, FaFacebookMessenger, FaArrowUp} from "react-icons/fa"

function Footer() {
    return (
        <>
            <footer className="mt-auto">
                <div className="container-fluid footer">
                    <div className="row p-md-3">
                        <div className="col-md-5 d-flex flex-column">
                            <span className="mt-3">
                            <img
                                src={centie_footer}
                                alt="centie footer"
                                className="footer-img"
                            />
                            </span>
                            {/* <span className="text-light">By National University</span> */}
                        </div>
                        <div className="col-md-4 justify-content-center text-light">
                            <div className="mx-md-auto" style={{width: "fit-content"}}>
                                Contents
                                <ul>
                                    <li>
                                    <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                    <Link to="/">Exhibits</Link>
                                    </li>
                                    <li>
                                    <Link to="/">Gallery</Link>
                                    </li>
                                    <li>
                                    <Link to="/">About</Link>
                                    </li>
                                    <li>
                                    <Link to="/">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="col-md-2">
                            <div className="links">
                                <div className="pe-lg-5 text-light">
                                    Follow us!
                                    <br />
                                </div>
                                <div>
                                    <span className="text-light">
                                        <a className="fb" href="https://facebook.com/NUCentIE" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                                    </span>
                                    <span className="text-light px-2">
                                        <a className="fb-messenger" href="https://m.me/NUCentIE" target='_blank' rel="noopener noreferrer">
                                            <FaFacebookMessenger />
                                        </a>
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-1 text-end">
                            <span className="border rounded-circle px-1 pb-1 text-light arrowUp">
                            <FaArrowUp />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <a href='#'>
                        <div className="text-center copyright text-dark">COPYRIGHT&copy; @CENTIE INNOVATION HUB</div>
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;
