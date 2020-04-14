import React, { Fragment, useState, useEffect } from 'react';
import { db } from '../firebase';

const Lunch = () => {

    const [lunch, setLunch] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const data = await db.collection('almuerzo').get()
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                console.log(arrayData);
                setLunch(arrayData)

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
                </div>
            </div>
            
        </Fragment>
    )
}

export default Lunch;
