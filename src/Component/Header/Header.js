import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo-ielts.png'


const Header = () => {

    return (
        <div className="header-height">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <div>
                            <img className='mt-2' src={logo} alt="" />
                        </div>
                        <div>
                            <ul className="d-flex mt-4 ul-design align-items-end justify-content-end">

                                {/* Nav-link */}

                                <li>
                                    <Link to="/home" className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/courses" className="nav-link">
                                        Courses
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="nav-link">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="contact" className="nav-link">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-start m-5">
                <div className='div-container'>
                    <h1 className="h1-color">IELTS <span className='text-warning'>Bangladesh</span></h1>
                    <p className="text-info">Prepare yourself and grab the opportunity to represent internationally
                        <br />Our highly qualified teachers deliver an interactive learning experience in our classrooms
                        <br />
                        <br />
                        Thousands of our students get their desire band in IELTS
                    </p>
                    <span className='text-warning'>Now it's your chance</span>
                </div>
            </div>
        </div>
    );
};

export default Header;