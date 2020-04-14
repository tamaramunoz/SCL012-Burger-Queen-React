import React, { Fragment, useState } from 'react'


const ButtonProduct = (props) => {

    const [product, setProduct] = useState(props.Products);
 
  return (
    <Fragment>
      <ul>
        {product.map((e, key) => (
          <button key={key} onClick={this.props.addFood}>
            {e.food} {e.price}
          </button>
        ))}
      </ul>
      <p></p>
    </Fragment>
  );
};

export default ButtonProduct;
