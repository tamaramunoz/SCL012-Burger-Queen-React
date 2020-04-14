import React, { Fragment, useState } from "react";

import Breakfast from './Breakfast';
import Lunch from './Lunch';
import UserTable from "./UserTable";
import TableForm from "./TableForm";


const Waiter = () => {

  const [foodList, setFoodList] = useState([]);


  return (
    <Fragment>
      <h1 className="mainTitle">Mesero</h1>

      <div>
        <TableForm />
      </div>

      <div className="container">
        <div className="flex-row">
          <div className="flex-large">

            <div>
              <Breakfast /> <hr/>
              <Lunch />

            </div>

          </div>

          <div className="flex-large">
            <h2>View Order</h2>
            <UserTable
              foodList={foodList}

            />
          </div>

        </div>
      </div>

    </Fragment>
  );
};
export default Waiter;
