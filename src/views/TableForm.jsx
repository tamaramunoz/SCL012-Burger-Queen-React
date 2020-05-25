import React, { Fragment, useState } from 'react'
import '../css/TableForm.css'

const TableForm = (props) => {

  const [customerData, setCustomerData] = useState({
    name: '',
    table: ''
  })

  const handleInpuntChange = (event) => {
    // console.log(event.target.value)
    setCustomerData({
      ...customerData,
      [event.target.name]: event.target.value
    })
  }

  const sendUserData = (event) => {
    event.preventDefault();
    console.log(customerData.name + ' ' + customerData.table)
  }

  return (
    <Fragment>
      <div className="user-container" >
        <h4 className="user-data" >Datos Cliente</h4>

        <form className="user-form" onSubmit={sendUserData}>
          <div className="col-md-3">
            <input
              placeholder="Ingrese Nombre"
              className="form-input"
              type="text"
              name="name"
              onChange={handleInpuntChange}
            ></input>
          </div>

          <div className="col-md-3">
            <input
              placeholder="Ingrese Mesa"
              className="form-input"
              type="text"
              name="table"
              onChange={handleInpuntChange}
            ></input>
          </div>

          <div className="col-md-3">
            <button className="button-agregar" type="submit">Agregar</button>
          </div>
        </form>

        <div>
          <p> {customerData.name} - {customerData.table} </p>
        </div>
      </div>
    </Fragment>
  )
}

export default TableForm;
