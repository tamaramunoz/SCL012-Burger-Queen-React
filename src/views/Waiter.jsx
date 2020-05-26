import React, { Fragment } from "react"
import { Card } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import breakfastphoto from '../img/breakfast-yellow.png'
import lunchphoto from '../img/lunch-yellow.png'
import '../css/Waiter.css'


const Waiter = (props) => {


  return (
    <Fragment>
      <div className="waiter-container">
        <h1 className="mainTitle">Mesero</h1>
        <div className="cards-container">

          <NavLink className="mr-2" to="/breakfast">
            <div className="space-down">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={breakfastphoto} />
            </Card>
            </div>
          </NavLink>

          <NavLink className="mr-2" to="/lunch">
            <div className="space-up">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={lunchphoto} />
            </Card>
            </div>
          </NavLink>
        </div>
      </div>

    </Fragment>
  );
};
export default Waiter;
