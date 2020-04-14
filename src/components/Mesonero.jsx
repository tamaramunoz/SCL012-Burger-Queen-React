import React, { Fragment, useState } from "react";
import UserTable from "./UserTable";
import AddProductForm from "./AddProductForm";
import LunchMenu from "./lunchMenu";


const Mesonero = () => {
  
  // state
  const [foodList, setFoodList] = useState([]);

  // agrega alimento
  const addFood = food => {
    console.log("SE EJECUTA Y TRAE:", food);
    setFoodList([...foodList, food]);
    console.log("STATE EN MESONERO.JSX", foodList);
  };

  return (
    <Fragment>
      <div>
      <h1 className="mainTitle">Mesonero</h1>
      </div>
      <div>
          <AddProductForm  
            addFood={addFood} />
      </div>
      <div>
        <div className="container">
          <div className="flex-row">
            <div className="flex-large">
              <div>
                <LunchMenu 
                  addFood={addFood} />
              </div>
            </div>
            <div className="flex-large">
              <h2>View Order</h2>
              <UserTable 
                foodList={foodList} 
                addFood={addFood}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Mesonero;