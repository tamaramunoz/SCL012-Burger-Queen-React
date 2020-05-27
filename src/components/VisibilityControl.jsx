import React, { Fragment } from 'react'


const VisibilityControl = (props) => {

    return ( 
        <Fragment>
            <div className="form-check">
                <input 
                    type="checkbox"
                    className="form-check-input"
                    checked={props.isChecked}
                    onChange={e => props.createNewTask(e.target.checked)}
                />
                <label htmlFor="form-check-label">
                    Mostrar {props.description}
                </label>
            </div>
        </Fragment>
     );
}
 
export default VisibilityControl;
