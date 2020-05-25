import React, { Fragment } from "react"
import { Card } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import breakfastphoto from '../img/breakfast.jpg'
import lunchphoto from '../img/lunch.jpeg'
import '../css/Waiter.css'


const Waiter = (props) => {


  return (
    <Fragment>
      <div className="waiter-container">
        <h1 className="mainTitle">Mesero</h1>
        <div className="cards-container">

          <NavLink className="mr-2" to="/breakfast">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={breakfastphoto} />
              <Card.Body>
                <Card.Text>
                  <button className="button-waiter" >Desayuno</button>
                </Card.Text>
              </Card.Body>
            </Card>
          </NavLink>

          <NavLink className="mr-2" to="/lunch">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={lunchphoto} />
              <Card.Body>
                <Card.Text>
                  <button className="button-waiter" >Almuerzo</button>
                </Card.Text>
              </Card.Body>
            </Card>
          </NavLink>
        </div>
      </div>

    </Fragment>
  );
};
export default Waiter;
