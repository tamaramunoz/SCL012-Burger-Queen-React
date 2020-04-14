import React, { Fragment } from 'react'

const UserTable = (props) => {

  const deleteFoodFromList = (id) => {
    console.log('haciendo click a eliminar')
  }


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
          {props.foodList.length > 0 ? (
            props.foodList.map((product, id) => (
              <tr key={product.id} className='border-top margin-1 font-size-1'>
                <td>{product.food}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="button muted-button"
                    onClick={() => { deleteFoodFromList(product.id) }}
                  >
                    Delete </button>
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
  )
}

export default UserTable;
