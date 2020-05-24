import React, { Fragment } from 'react'

export const TaskRow = (props) => {
    return (
        <Fragment>
            <tr key={props.task.name}>
                <td>{props.task.name}</td>
                <td>
                    <input type="checkbox" 
                    checked={props.task.done} 
                    onChange={() => props.toggleTask(props.task)} 
                    />
                </td>
            </tr>
        </Fragment>
    );
}

export default TaskRow;
