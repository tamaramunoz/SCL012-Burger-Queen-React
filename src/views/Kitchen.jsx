import React, { Fragment, useState, useEffect } from 'react'
import TaskRow from '../components/TaskRow'
import TaskBanner from '../components/TaskBanner'
import TaskCreator from '../components/TaskCreator'
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
                    // console.log(arrayData);
                    setOrder(arrayData)

               } catch (error) {
                    console.log(error)
               }
          }

          getOrders()

     }, [])


     const createNewTask = taskName => {
          if (!order.find(t => t.name === taskName)) {
               setOrder([...order, { name: taskName, done: false }])
          }
     }

     const toggleTask = task =>
          setOrder(order.map(t => (t.name === task.name ? { ...t, done: !t.done } : t)))

     const taskTableRows = (doneValue) => {

          return order
               .filter(task => task.done === doneValue)
               .map(task => (
                    <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
               ))
     }

     return (
          <Fragment>
               <div>
                    <TaskBanner
                         userName={userName}
                         order={order}
                    />
                    <TaskCreator
                         createNewTask={createNewTask}

                    />
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
