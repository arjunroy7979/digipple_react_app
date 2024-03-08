import React from 'react';
import './Navbar.css';
import navbardata from './navbardata.json'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>
                    <img src="../images/digipple_logo.png" alt="" className="navbar-brand-img" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {
                            navbardata && navbardata.map((item) => {
                                return (
                                    <li className="nav-item active" key={item.id}>
                                        <Link className="nav-link" to={`${item.link}`}>{item.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar