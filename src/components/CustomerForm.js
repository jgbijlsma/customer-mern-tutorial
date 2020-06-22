import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const CustomerForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [adress, setAdress] = useState();

  const submit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      adress,
    };

    await Axios.post(
      "https://customer-mern-tutorial.herokuapp.com/customer",
      data
    );
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <form onSubmit={submit}>
        <label htmlFor="form-name">Name</label>
        <input
          id="form-name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="form-email">Email</label>
        <input
          id="form-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="form-adress">Adress</label>
        <input
          id="form-adress"
          type="text"
          onChange={(e) => setAdress(e.target.value)}
        />

        <button>Create customer</button>
      </form>
    </div>
  );
};

export default CustomerForm;
