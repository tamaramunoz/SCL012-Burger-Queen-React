import React, { Fragment, useState, useEffect } from 'react'
import NavBar from './NavBar'
import '../css/Breakfast.css'
import '../css/TableForm.css'
import { db } from '../firebase'
import shortid from 'shortid'


const Lunch = () => {

    const [lunch, setLunch] = useState([]);
    const [order, setOrder] = useState([]);
    const [ready, setReady] = useState(false)
    const [customerData, setCustomerData] = useState({ name: '', table: '' })

    useEffect(() => {
        const getInfo = async () => {
            try {
                const data = await db.collection('almuerzo').get()
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setLunch(arrayData)

            } catch (error) {
                console.log(error)
            }
        }

        getInfo()
    }, [])

    const handleInpuntChange = (event) => {
        setCustomerData({
            ...customerData,
            [event.target.name]: event.target.value
        })
    }

    const sendUserData = (event) => {
        event.preventDefault();
        // console.log(customerData.name + ' ' + customerData.table)
    }

    const selectProductLunch = (item) => {
        setOrder([
            ...order,
            { name: item.name, price: item.price, id: shortid.generate() }
        ])
    }

    const addOrder = async () => {
        try {
            await db.collection('pedido').add({
                takeOrder: order,
                client: customerData,
                done: ready
            })

        } catch (error) {
            console.log(error);
        }

        setOrder([])
        setCustomerData({name: '', table: ''})
    }

    const deleteFoodFromList = async (id) => {
        const arrayFiltrado = order.filter(item => item.id !== id)
        setOrder(arrayFiltrado)
    }

    const totalAmount = () => {
        let suma = 0;
        order.map(e => (
            suma += e.price
        ))

        return suma;
    }


    return (
        <Fragment>
            <NavBar />
            <div className="container-Wbreakfast mt-5">
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

                <div className="row">
                    <div className="col-md-6">
                        <h2 className="breakfast-title">Almuerzo</h2>

                        <h3 className="products-list">Lista de productos</h3>
                        {
                            lunch.map(item => (
                                <button
                                    className="menuButton"
                                    key={item.id}
                                    onClick={(e) => selectProductLunch(item)}
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
                            <tbody className="table-body-item">
                                {order.length > 0 ? (
                                    order.map((product, id) => (
                                        <tr key={product.id} className='border-top margin-1 font-size-1'>
                                            <td className="product-breakfast">{product.name}</td>
                                            <td className="product-breakfast">{product.price}</td>
                                            <td>
                                                <button
                                                    className="button-delete"
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
                        <div>
                            <p className="total-amount">Total: {totalAmount()}</p>
                        </div>

                        <button
                            onClick={() => addOrder()}
                            value={order}
                            className="send-kitchen"
                        >Enviar a Cocina</button>

                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Lunch;
