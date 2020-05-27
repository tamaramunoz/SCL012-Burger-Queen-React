import React, { useState, useEffect, Fragment } from 'react'
import TableForm from "../views/TableForm"
import '../css/Breakfast.css'
import { db } from '../firebase'
import shortid from 'shortid'


const Breakfast = (props) => {

  const [breakfast, setBreakfast] = useState([])
  const [nameProduct, setNameProduct] = useState([])

  useEffect(() => {
    const getData = async () => {

      try {
        const data = await db.collection('desayuno').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setBreakfast(arrayData)

      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [])

  const SelectProduct = (item) => {
    // console.log(item)
    setNameProduct([
      ...nameProduct,
      { name: item.name, price: item.price, id: shortid.generate() }
    ])
  }

  const addOrder = async () => {
    try {
      await db.collection('pedido').add({
        takeOrder: nameProduct
      })

    } catch (error) {
      console.log(error);
    }

    setNameProduct([])
  }

  const deleteFoodFromList = async (id) => {
    const arrayFiltrado = nameProduct.filter(item => item.id !== id)
    setNameProduct(arrayFiltrado)
  }

  const totalAmount = () => {
    let suma = 0;
    nameProduct.map(e => (
      suma += e.price
    ))

    return suma;
  }


  return (
    <Fragment>
      <div className="container-Wbreakfast mt-5">

        <div className="justify-content-center">
          <TableForm 
            customerData={props.customerData} 
          />
        </div>

        <div className="row">
          <div className="col-md-6">
            <h2 className="breakfast-title">Desayuno</h2>

            <h3 className="products-list" >Lista de productos</h3>
            {
              breakfast.map(item => (
                <button
                  className="menuButton"
                  key={item.id}
                  onClick={(e) => SelectProduct(item)}
                >
                  <img src={item.img} alt="icono-producto" className="iconButton" width={45}></img>
                  <p>{item.name}</p> <p>${item.price}</p>
                </button>
              ))
            }
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr className="table-header">
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {nameProduct.length > 0 ? (
                  nameProduct.map(item => (
                    <tr key={item.id} className='border-top margin-1 font-size-1'>
                      <td className="product-breakfast">{item.name}</td>
                      <td className="product-breakfast">{item.price}</td>
                      <td>
                        <button
                          className="button-delete"
                          onClick={() => { deleteFoodFromList(item.id) }}
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
            <div>
              <p className="total-amount">Total: {totalAmount()}</p>
            </div>

            <button
              onClick={() => addOrder()}
              value={nameProduct}
              className="send-kitchen"
            >Enviar a Cocina</button>

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Breakfast;
