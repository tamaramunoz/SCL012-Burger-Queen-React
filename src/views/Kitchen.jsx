import React, { Fragment, useState, useEffect } from 'react'
import CardKitchen from '../components/CardKitchen'
import NavBar from '../components/NavBar'
import OrderBanner from '../components/OrderBanner'
import { db } from '../firebase'
import '../css/Kitchen.css'


const Kitchen = () => {

     const [order, setOrder] = useState([])

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

     const toggleOrder = (item) => {
          setOrder(order.map(clientOrder => (clientOrder.id === item.id ? { ...clientOrder, done: !clientOrder.done } : clientOrder)))
     }

     const orderCards = (doneValue) => {
          return order
               .filter(item => item.done === doneValue)
               .map(item => (
                    <CardKitchen item={item} key={item.id} toggleOrder={toggleOrder} />
               ))
     }


     return (
          <Fragment>
               <NavBar />
               <div className="kitchen-container">
                    <OrderBanner
                         order={order}
                    />
                    <div className="container-kitchen-cards">
                         {orderCards(false)}
                    </div>


                    <div className="ready-to-eat">
                         <p>Listos para servir</p>
                         <div className="container-kitchen-ready">
                              {orderCards(true)}
                         </div>
                    </div>

               </div>
          </Fragment>
     );
}

export default Kitchen;
