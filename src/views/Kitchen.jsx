import React, { Fragment, useState, useEffect } from 'react'
import OrderBanner from '../components/OrderBanner'
import { db } from '../firebase'
import '../css/Kitchen.css'


const Kitchen = () => {

     const [order, setOrder] = useState([])
     const [showCompleted, setShowCompleted] = useState(true)

     useEffect(() => {

          const getOrders = async () => {

               try {
                    const data = await db.collection('pedido').get()
                    const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                    console.log(arrayData);
                    setOrder(arrayData)

               } catch (error) {
                    console.log(error)
               }
          }

          getOrders()

     }, [])

     const readyToEat = () => {
          console.log('hice click de listo');
          setShowCompleted(false)
     }


     return (
          <Fragment>
               <div className="kitchen-container">
                    <OrderBanner
                         order={order}
                    />
                    <div className="container-kitchen-cards">
                         {order.map(item => (
                              <div style={{ width: '18rem' }} key={item.id} className="cards-ready" >
                                   <div className="cards-bodys">
                                        <div className="card-title-kit">Cliente: {item.client.name}</div>
                                        <div className="card-subtitle-kit">Pedido: {item.client.table}</div>
                                        <div className="card-text-kit">
                                             {
                                                  item.takeOrder.map(e => (
                                                       <li key={e.id}
                                                            className="cards-list-prod"
                                                       >{e.name}</li>
                                                  ))
                                             }
                                        </div>
                                        <div className="button-order-ready">
                                             <button
                                                  onClick={() => readyToEat()}
                                                  className="order-ready"
                                             >Listo</button>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>

               </div>
          </Fragment>
     );
}

export default Kitchen;
