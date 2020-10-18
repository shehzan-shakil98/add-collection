import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <div className="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                        <a className="navbar-brand " style={{fontSize:'20px'}} href="logo"><FontAwesomeIcon icon={faBookOpen} /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        <div className=" navbar-collapse" id="">
            <div className="navbar nav">
                <a className="nav-link" href="home">Home </a>
                <a className="nav-link" href="course">Courses</a>
                <a className="nav-link" href="instructor">Instructor</a>
                <a className="nav-link" href="about" >About us</a>
                <a className="nav-link" href="contact" >Contact us</a>
            </div>
    </div>
</div>
</nav>
            </div>
        </div>
    );
};

export default Header;