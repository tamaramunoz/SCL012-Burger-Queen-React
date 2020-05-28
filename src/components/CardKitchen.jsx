import React from 'react'

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
                <input
                    type="checkbox"
                    checked={props.item.done}
                    onChange={() => props.toggleOrder(props.item)}
                />
                <div className="button-order-ready">
                    <button
                        className="order-ready"
                    >Listo</button>
                </div>
            </div>
        </div>
    )
}

export default CardKitchen
