import React, { Fragment } from "react";
import { useForm } from "react-hook-form";


const AddProductForm = props => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    // console.log(data)
    props.addFood(data);
    e.target.reset();
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)} className="formUser">
        <label>Costumer name</label>
        <input
          type="text"
          name="food"
          className='dataUser'
          ref={register({
            required: { value: true, message: "Campo requerido" }
          })}
        />
        <button className="generalButtons">Add name</button>
      </form>
    </Fragment>
  );
};

export default AddProductForm;
