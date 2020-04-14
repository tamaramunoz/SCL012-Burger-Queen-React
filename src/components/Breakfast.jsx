import React, { useState, useEffect, Fragment } from 'react';
import { db } from '../firebase';

const Breakfast = () => {

    const [breakfast, setBreakfast] = useState([])

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const data = await db.collection('desayuno').get()
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                console.log(arrayData);
                setBreakfast(arrayData)

            } catch (error) {
                console.log(error)
            }
        }

        obtenerDatos()

    }, [])


    return (
        <Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Desayuno</h2>
                        
                            <h3>Lista de productos</h3>
                            {
                                breakfast.map(item => (
                                    <button className="menuButton" key={item.id}>
                                        <img src={item.img} alt="" className="iconButton" width={45}></img>
                                        <p>{item.name}</p> <p>${item.price}</p>
                                    </button>
                                ))
                            }

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Breakfast;
