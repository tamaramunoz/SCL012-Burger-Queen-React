import React from 'react'
import '../css/Kitchen.css'

const CardKitchen = (props) => {
    return (
        <div style={{ width: '18rem' }} key={props.item.id} className="cards-ready" >
            <div className="cards-bodys">
                <div className="card-title-kit">Cliente: {props.item.client.name}</div>
                <div className="card-subtitle-kit">Pedido: {props.item.client.table}</div>
                <div className="card-text-kit">
                    {
                        props.item.takeOrder.map(e => (
                            <li key={e.id}
                                className="cards-list-prod"
                            >{e.name}</li>
                        ))
                    }
                </div>
                <div className="button-order-ready">
                    <button
                        className="order-ready"
                        value={props.item.done}
                        onClick={() => props.toggleOrder(props.item)}
                    >Listo</button>
                </div>
            </div>
        </div>
    )
}

export default CardKitchen
