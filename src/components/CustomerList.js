import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      const customersRes = await Axios.get(
        "https://customer-mern-tutorial.herokuapp.com/customers"
      );
      setCustomers(customersRes.data);
    };

    getCustomers();
  }, []);

  const renderCustomers = () => {
    return customers.map((customer, i) => {
      return (
        <div key={i}>
          <h3>{customer.name}</h3>
          <p>{customer.email}</p>
          <p>{customer.adress}</p>
        </div>
      );
    });
  };

  return (
    <div className="customer-list">
      <Link to="/">Home</Link>
      {renderCustomers()}
    </div>
  );
};

export default CustomerList;
