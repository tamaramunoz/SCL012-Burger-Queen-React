import React, { Fragment, useState } from "react";

const TableForm = (props) => {

  const [datos, setDatos] = useState({
    nombre: '',
    mesa: ''
  })

  const handleInpuntChange = (event) => {
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.nombre + ' ' + datos.mesa)
  }

  return (
    <Fragment>
      <h4>Datos Cliente</h4>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <input
            placeholder="Ingrese Nombre"
            className="form-control"
            type="text"
            name="nombre"
            onChange={handleInpuntChange}
          ></input>
        </div>
        <div className="col-md-3">
          <input
            placeholder="Ingrese Mesa"
            className="form-control"
            type="text"
            name="mesa"
            onChange={handleInpuntChange}
          ></input>
        </div>
        <div className="col-md-3">
          <button className="btn btn-danger" type="submit">Agregar</button>
        </div>
      </form>
      <h3>{datos.nombre} - {datos.mesa}</h3>
    </Fragment>
  );
};

export default TableForm;
