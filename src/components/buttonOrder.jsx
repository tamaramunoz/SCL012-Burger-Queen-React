import React, {Fragment} from 'react';
import './App.css';
import { db } from '../firebase'



function buttonOrder() {  

  const upOrder = () =>{
    let productoName = document.getElementById('productName').textContent
    let productPrice = document.getElementById('productPrice').textContent
    db.collection('Pedidos').add({
      nombre:productoName,
      precio:productPrice
    })
    .then(()=>{
      console.log('Agregado')
    })

  }
    
  return (
    <Fragment>    
      <button onClick={upOrder}>Ordenar</button>         
    </Fragment>
  );
}

export default buttonOrder;