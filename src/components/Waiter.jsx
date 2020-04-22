import React, { Fragment } from "react"
import { NavLink } from "react-router-dom"


const Waiter = (props) => {


  return (
    <Fragment>
      <h1 className="mainTitle">Mesero</h1>
      <div className="container">
        <div className="flex-row">
          <div className="flex-large">
            <div>

            <NavLink className="btn btn-dark mr-2" to="/breakfast">
                Desayuno
            </NavLink>

            <NavLink className="btn btn-dark mr-2" to="/lunch">
                Almuerzo
            </NavLink>

            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
};
export default Waiter;
