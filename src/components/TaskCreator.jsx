import React, { Fragment, useState } from 'react'

const TaskCreator = (props) => {
    
    const [newTaskName, setNewTaskName] = useState('');

    const updateNewTaskValue = e => setNewTaskName(e.target.value);

    const createNewTask = () => {
        props.createNewTask(newTaskName)
        setNewTaskName('');
    }

    return ( 
        <Fragment>
            <div className="my-1">
                <input 
                    type="text"
                    className="form-control"
                    value={newTaskName}
                    onChange={updateNewTaskValue}
                />
                <button className="btn btn-dark mt-1" onClick={createNewTask}>
                    Agregar
                </button>
            </div>
        </Fragment>
     );
}
 
export default TaskCreator;
