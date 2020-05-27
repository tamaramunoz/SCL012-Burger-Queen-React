import React, { Fragment } from 'react'
import '../css/OrderBanner.css'

const OrderBanner = (props) => {
    return (
        <Fragment>
            <div className="banner-container">
                <h1 className="title-kitchen">Cocina</h1>
                <h4 className="title-info">
                    Burger Queen ({props.order.filter(order => !order.done).length} pedidos por hacer)
                </h4>
            </div>
        </Fragment>
    );
}

export default OrderBanner;
