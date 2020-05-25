import React, { Fragment } from 'react'

const TaskBanner = (props) => {
    return ( 
        <Fragment>
            <h4 className="bg-warning text-white text-center p-4">
                {props.userName} Pedido ({props.order.filter(order => !order.done).length} pedidos por hacer)
            </h4>
        </Fragment>
     );
}
 
export default TaskBanner;
