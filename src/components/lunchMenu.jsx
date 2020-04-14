import React, { Component } from 'react';
import { db } from '../firebase';


class lunchMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuA: []
    }
  }
  
  componentDidMount(props){
    db.collection('Almuerzo').get().then((querySnapshot) => {
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
      <h2>Menu</h2>
      <div className="menu">
        {this.state.menuA.map((item, key) =>{
            return (
              <div key={key}>
                <button 
                  onClick={this.props.addFood.bind(this, item)}
                  className="menuButton"> 
                  <img src={item.img} alt="" className="iconButton"></img>
                  <p>{item.nombre}</p> <p>${item.precio}</p>
                </button>
              </div>
            ) 
          })          
        }      
      </div>
      </div>
    )
    }
  }

  export default lunchMenu;
