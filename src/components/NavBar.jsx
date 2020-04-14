import React, { Fragment } from 'react';
import { Link, NavLink } from "react-router-dom";

import Logo from '../logo-bq.png'


const NavBar = () => {

    return (
        <Fragment>
            <div className="navbar navbar-dark bg-dark">
                <Link className="navbar-brand" to="/"><img src={Logo} alt="logo" width={64} /></Link>
                <div>
                    <div className="d-flex">
                        <NavLink className="btn btn-dark mr-2" to="/" exact>
                            Inicio
                        </NavLink>

                        <NavLink className="btn btn-dark mr-2" to="/waiter">
                            Mesero
                        </NavLink>

                        <NavLink className="btn btn-dark mr-2" to="/kitchen">
                            Cocina
                        </NavLink>

                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default NavBar;
