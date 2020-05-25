import React, { Fragment } from 'react'

export const TaskRow = (props) => {
    return (
        <Fragment>
            <tr key={props.item.name}>
                <td>{props.item.name}</td>
                <td>
                    <input type="checkbox" 
                    checked={props.item.done} 
                    onChange={() => props.toggleTask(props.item)} 
                    />
                </td>
            </tr>
        </Fragment>
    );
}

export default TaskRow;
