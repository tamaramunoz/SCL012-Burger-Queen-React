import React, { Fragment, useState, useEffect } from 'react'
import TaskRow from '../components/TaskRow'
import OrderBanner from '../components/OrderBanner'
import VisibilityControl from '../components/VisibilityControl'
import { Card } from 'react-bootstrap'
import { db } from '../firebase'
import '../css/Kitchen.css'

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
               <div className="kitchen-container">
                    <OrderBanner
                         userName={userName}
                         order={order}
                    />
                    <ul>
                         {order.map(item => (
                              <Card style={{ width: '18rem' }} key={item.id}>
                                   <Card.Body>
                                        <Card.Title>Cliente: {item.id}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Pedido Mesa</Card.Subtitle>
                                        <Card.Text>
                                             {
                                                  item.takeOrder.map(item => (
                                                       <li key={item.id}>{item.name}</li>
                                                  ))
                                             }
                                        </Card.Text>
                                   </Card.Body>
                              </Card>

                         ))}
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
