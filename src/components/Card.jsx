import React, { Fragment } from 'react';
import Image from './components/Image'

const Card = ({urlImagen}) => {

    return ( 
        <Fragment>
            <div className="card">
            <Image urlImagen={urlImagen}></Image>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <input type="button" value="Agregar"/>
                </div>
            </div>          
        </Fragment>
     );
}
export default Card;