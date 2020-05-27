import React, { Fragment, useState, useEffect } from 'react'
import OrderBanner from '../components/OrderBanner'
import VisibilityControl from '../components/VisibilityControl'
import { db } from '../firebase'
import '../css/Kitchen.css'


const Kitchen = (props) => {

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
                                        <div className="card-title-kit">Cliente: {item.id}</div>
                                        <div className="card-subtitle-kit">Pedido Mesa</div>
                                        <div className="card-text-kit">
                                             {
                                                  item.takeOrder.map(e => (
                                                       <li key={e.id}
                                                            className="cards-list-prod"
                                                       >{e.name}</li>
                                                  ))
                                             }
                                        </div>
                                        <input type="checkbox" />
                                   </div>
                              </div>

                         ))}
                    </div>

                    <div className="bg-secondary-text-white text-center p-2">
                         <VisibilityControl
                              description="Pedidos Listos"
                              isChecked={showCompleted}
                              orderReady={checked => setShowCompleted(checked)}
                         />
                    </div>
                    {
                         showCompleted && (
                              <div>
                                   <p>Listos para servir</p>
                              </div>

                         )
                    }
               </div>
          </Fragment>
     );
}

export default Kitchen;
