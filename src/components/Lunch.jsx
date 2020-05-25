import React, { Fragment, useState, useEffect } from 'react';
import TableForm from "../views/TableForm";
import { db } from '../firebase';


const Lunch = (props) => {

    const [lunch, setLunch] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const data = await db.collection('almuerzo').get()
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                // console.log(arrayData);
                setLunch(arrayData)

            } catch (error) {
                console.log(error)
            }
        }

        obtenerDatos()

    }, [])

    const deleteFoodFromList = async (id) => {
        console.log('haciendo click a eliminar')

        try {
            await db.collection('pedido').doc(id).delete()

            const arrayFiltrado = lunch.filter(item => item.id !== id)
            setOrder(arrayFiltrado)

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
                        <h2>Almuerzo</h2>

                        <h3>Lista de productos</h3>
                        {
                            lunch.map(item => (
                                <button className="menuButton" key={item.id}>
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
                                {lunch.length > 0 ? (
                                    lunch.map((product, id) => (
                                        <tr key={product.id} className='border-top margin-1 font-size-1'>
                                            <td>{product.name}</td>
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
                    </div>
                </div>
            </div>



        </Fragment>
    )
}

export default Lunch;
