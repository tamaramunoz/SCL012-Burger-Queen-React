import React, { Fragment } from 'react'

const Image = ({urlImagen}) => {
    return ( 
        <Fragment>
            <img src={urlImagen} alt="" className="mr-3"/>
        </Fragment>
     );
}
 
export default Image;