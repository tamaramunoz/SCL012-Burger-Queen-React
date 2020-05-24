import React, { Fragment, useState, useEffect } from 'react'
import TaskRow from './TaskRow'
import TaskBanner from './TaskBanner'
import TaskCreator from './TaskCreator'
import VisibilityControl from './VisibilityControl'

const Kitchen = (props) => {

     const [userName, setUserName] = useState('Burger Queen')
     const [orderItems, setOrderItems] = useState([])
   
     const [showCompleted, setShowCompleted] = useState(true)
   
     useEffect(() => {
       let data = localStorage.getItem('orders');
       if (data != null) {
         setOrderItems(JSON.parse(data));
       } else {
         setUserName('')
         setOrderItems([
           { name: 'Table One 1', done: false },
           { name: 'Table Two 2', done: false },
           { name: 'Table Three 3', done: true },
           { name: 'Table Four 4', done: false },
         ])
         setShowCompleted(true)
       }
     }, []);
   
     useEffect(() => {
       localStorage.setItem('orders', JSON.stringify(orderItems));
   
     }, [orderItems]);
   
     const createNewTask = taskName => {
       if (!orderItems.find(t => t.name === taskName)) {
         setOrderItems([...orderItems, {name: taskName, done: false}])
       }
     }
   
     const toggleTask = task => 
       setOrderItems(orderItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t)))
   
     const taskTableRows = (doneValue) => {
      
       return orderItems
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
                         orderItems={orderItems}
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
