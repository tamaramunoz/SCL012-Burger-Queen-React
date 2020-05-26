import React, { Fragment } from 'react';
import { Link, NavLink } from "react-router-dom";
import '../css/Navbar.css'
import Logo from '../img/logo-bq.png';


const NavBar = () => {

    return (
        <Fragment>
            <div className="navbar">
                <Link className="navbar-brand" to="/"><img src={Logo} alt="logo" width={70} /></Link>
                <div>
                    <div className="d-flex">
                        
                        <NavLink className="buttonnav" to="/waiter">
                            Mesero
                        </NavLink>

                        <NavLink className="buttonnav" to="/kitchen">
                            Cocina
                        </NavLink>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NavBar;
