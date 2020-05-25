import React, { Fragment, useState, useEffect } from 'react'
import TaskRow from '../components/TaskRow'
import OrderBanner from '../components/OrderBanner'
import VisibilityControl from '../components/VisibilityControl'
import { db } from '../firebase'

const Kitchen = (props) => {

     const [userName, setUserName] = useState('Burger Queen')
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


     const toggleOrder = (task) =>
          setOrder(order.map(item => (item.name === task.name ? { ...item, done: !item.done } : item)))
          

     const taskTableRows = (doneValue) => {
          return order
               .filter(item => item.done === doneValue)
               .map(item => (
                    <TaskRow item={item} key={item.name} toggleOrder={toggleOrder} />
               ))
     }

     return (
          <Fragment>
               <div>
                    <OrderBanner
                         userName={userName}
                         order={order}
                    />
                    <ul>
                         {order.map(item => ( <li key={item.id}>{item.id}</li> ))}
                    </ul>

                    <table className="table table-striped table-bordered">
                         <thead>
                              <tr>
                                   <th>Descripción de la orden</th>
                                   <th>En preparación</th>
                              </tr>
                         </thead>
                         <tbody>
                              {taskTableRows(false)}
                         </tbody>
                    </table>
                    <div className="bg-secondary-text-white text-center p-2">
                         <VisibilityControl
                              description="Pedidos Listos"
                              isChecked={showCompleted}
                              createNewTask={checked => setShowCompleted(checked)}
                         />
                    </div>
                    {
                         showCompleted && (
                              <table className="table table-striped table-bordered">
                                   <thead>
                                        <tr>
                                             <th>Descripción de la orden</th>
                                             <th>Listos para servir</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {taskTableRows(true)}
                                   </tbody>
                              </table>
                         )
                    }
               </div>
          </Fragment>
     );
}

export default Kitchen;
