import React, { useState, useEffect, Fragment } from 'react'
import TableForm from "../views/TableForm"
import '../App.css'
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
        // console.log(arrayData);
        setBreakfast(arrayData)

      } catch (error) {
        console.log(error)
      }
    }

    getData()

  }, [])


  const SelectProduct = (item) => {
    console.log(item)

    setNameProduct([
      ...nameProduct,
      {name: item.name, price: item.price, id: shortid.generate()}
    ])
  }

  const addOrder = async () => {
    console.log('hice click');

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
    console.log('haciendo click a eliminar')

    try {
      await db.collection('pedido').doc(id).delete()
      console.log(id)
      // const arrayFiltrado = data.docs.filter(item => item.id !== id)
      // setOrder(arrayFiltrado)

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Fragment>
      <div className="justify-content-center">
        <TableForm />
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Desayuno</h2>

            <h3>Lista de productos</h3>
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

          <div>
            <table>
              <thead>
                <tr>
                  <th>Food</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {nameProduct.length > 0 ? (
                  nameProduct.map(item => (
                    <tr key={item.id} className='border-top margin-1 font-size-1'>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>
                        <button
                          className="button muted-button"
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

            <button
              onClick={() => addOrder()}
              value={nameProduct}
            >Enviar a Cocina</button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Breakfast;
