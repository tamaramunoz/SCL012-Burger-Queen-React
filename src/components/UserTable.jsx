import React, { Fragment, Component } from "react";


class UserTable extends Component {
  constructor(props) {
    super(props);
    console.log("FOOD EN PROPS", props.foodList);
    this.state = {
      foodList: props.foodList
    }
  }

  deleteFoodFromList = (id) => {
    let newArrayOfFood = this.state.foodList.filter(food => {
      return food.id !== id;
    });
    this.setState(
      {
        foodList: newArrayOfFood
      }
    );
  }

  render() {
    return (
      <Fragment>
        <table>
          <thead>
            <tr>
              <th>Food</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.foodList.length > 0 ? (
              this.state.foodList.map((product, id) => (
                <tr key={product.id} className='border-top margin-1 font-size-1'>
                  <td>{product.food}</td>
                  <td>{product.price}</td>
                  <td>
                    <button
                      className="button muted-button"
                      onClick={() => {
                        this.deleteFoodFromList(product.id);
                      }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No order</td>
              </tr>
            )}
          </tbody>
        </table>
      </Fragment>
    );
  }
  
};
export default UserTable;
