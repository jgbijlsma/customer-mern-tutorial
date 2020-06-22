import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ul>
      <li>
        <Link to="/customerForm">New Customer</Link>
      </li>
      <li>
        <Link to="/customerList">Customer list</Link>
      </li>
    </ul>
  );
};

export default Home;
