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
                        <img className="d-flex" src={logo} alt="" />
                        <ul className="d-flex align-items-end justify-content-end">

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
            <div className="d-flex justify-content-start m-5">
                <div>
                    <h1 className="h1-color">IELTS Bangladesh</h1>
                    <p className="text-warning">Prepare yourself and grab the opportunity to represent internationally <br />Our highly qualified teachers deliver an interactive learning experience in our classrooms</p>
                </div>
            </div>
        </div>
    );
};

export default Header;