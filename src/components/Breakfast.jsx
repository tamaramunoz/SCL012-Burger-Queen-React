import React, { useState, useEffect, Fragment } from 'react'
import NavBar from '../components/NavBar'
import '../css/Breakfast.css'
import '../css/TableForm.css'
import { db } from '../firebase'
import shortid from 'shortid'


const Breakfast = (props) => {

  const [breakfast, setBreakfast] = useState([])
  const [nameProduct, setNameProduct] = useState([])
  const [customerData, setCustomerData] = useState({ name: '', table: '' })

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


  const handleInpuntChange = (event) => {
    setCustomerData({
      ...customerData,
      [event.target.name]: event.target.value
    })
  }

  const sendUserData = (event) => {
    event.preventDefault()
    // console.log(customerData.name + ' ' + customerData.table)
  }

  const SelectProduct = (item) => {
    setNameProduct([
      ...nameProduct,
      { name: item.name, price: item.price, id: shortid.generate() }
    ])
  }

  const addOrder = async () => {
    try {
      await db.collection('pedido').add({
        takeOrder: nameProduct,
        client: customerData,
        done: false
      })

    } catch (error) {
      console.log(error);
    }

    setNameProduct([])
    setCustomerData({ name: '', table: '' })
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
      <NavBar />
      <div className="user-container" >
        <h4 className="user-data" >Datos Cliente</h4>

        <form className="user-form" onSubmit={sendUserData}>
          <div className="input-container">
            <input
              placeholder="Ingrese Nombre"
              className="form-input"
              type="text"
              name="name"
              onChange={handleInpuntChange}
            ></input>
          </div>

          <div className="input-container">
            <input
              placeholder="Ingrese Mesa"
              className="form-input"
              type="text"
              name="table"
              onChange={handleInpuntChange}
            ></input>
          </div>

          <div className="input-container">
            <button className="button-agregar" type="submit">Agregar</button>
          </div>
        </form>

        <div>
          <p> {customerData.name} - {customerData.table} </p>
        </div>
      </div>

      <div className="container-Wbreakfast">
        <div className="row">
          <div className="col-md-6">
            <h2 className="breakfast-title">Desayuno</h2>

            <h3 className="products-list" >Lista de productos</h3>
            <div className="products-container-b">
              {
                breakfast.map(item => (
                  <button
                    className="menuButton"
                    key={item.id}
                    onClick={(e) => SelectProduct(item)}
                  >
                    <img src={item.img} alt="icono-producto" className="iconButton" width={45}></img>
                    <div className="product-text-button">
                      <p>{item.name}</p> <p>${item.price}</p>
                    </div>
                  </button>
                ))
              }
            </div>
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
              <tbody className="table-body-item">
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
