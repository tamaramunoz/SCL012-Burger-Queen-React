import React, { useState, useEffect, Fragment } from 'react'
import TableForm from "./TableForm"
import '../App.css'
import { db } from '../firebase'

const Breakfast = () => {

  const [breakfast, setBreakfast] = useState([])
  const [order, setOrder] = useState({})

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


  useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await db.collection('pedido').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        // console.log(arrayData);
        setOrder(arrayData)

      } catch (error) {
        console.log(error)
      }
    }

    getOrders()

  }, [])


  const addProduct = async (item) => {
    // console.log('hice click')
    console.log(item)

    try {

      const takingOrder = {
        name: item.name,
        price: item.price
      }

      setNameProduct([
        ...nameProduct,
        takingOrder
      ])

      await db.collection('pedido').add(takingOrder)
      // await db.collection('pedido').add({ takingOrder })
      // const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      // setOrder(arrayData)

    } catch (error) {
      console.log(error)
    }
    // console.log(nameProduct)
  }

  
  const deleteFoodFromList = async(id) => {
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
                  onClick={(e) => addProduct(item)}
                >
                  <img src={item.img} alt="" className="iconButton" width={45}></img>
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
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Breakfast;
