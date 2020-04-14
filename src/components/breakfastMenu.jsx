import React, { Component } from 'react';
import { db } from '../firebase';


class breakfastMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuA: []
    }
  }
  
  componentDidMount(){
    db.collection('Desayuno').get().then((querySnapshot) => {
      const data = querySnapshot.docs.map(doc => doc.data());
      this.setState({
        menuA:data
      })
    
      console.log("STATE:", this.state);
    })
        
  }
  render(){
    return (      
      <div>
        <p>Menu</p>
        {this.state.menuA.map((item, key) =>{
            return (
              <div key={key}>
                <p>{item.nombre}</p>
                <p>{item.precio} </p>
              </div>
            ) 
          })          
        }      
      </div>
    )
    }
  }

  export default breakfastMenu;