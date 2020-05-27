import React, { Fragment } from "react"
import { Card } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import breakfastphoto from '../img/breakfast-yellow.png'
import lunchphoto from '../img/lunch-yellow.png'
import '../css/Waiter.css'
import NavBar from "../components/NavBar"


const Waiter = () => {

  return (
    <Fragment>
      <NavBar />
      <div className="waiter-container">
        <h1 className="witer-title">Mesero</h1>
        <div className="cards-container">

          <NavLink className="mr-2" to="/breakfast">
            <div className="space-down">
              <Card style={{ width: '18rem' }}>
                <div className="container-breakfast">
                  <Card.Img variant="top" src={breakfastphoto} />
                  <div className="overlay">
                    <div className="text">Desayunos</div>
                  </div>
                </div>
              </Card>
            </div>
          </NavLink>

          <NavLink className="mr-2" to="/lunch">
            <div className="space-up">
              <Card style={{ width: '18rem' }}>
                <div className="container-lunch">
                  <Card.Img variant="top" src={lunchphoto} />
                  <div className="overlay">
                    <div className="text">Almuerzos</div>
                  </div>
                </div>
              </Card>
            </div>
          </NavLink>
        </div>
      </div>

    </Fragment>
  );
};
export default Waiter;
