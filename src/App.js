import logo from './logo.svg';
import './App.css';


import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";

import Login from './containers/Login';
import Home from './containers/Home';
import Header from './containers/Header';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import React, { useEffect } from 'react';
import Orders from './containers/Orders';
import Checkout from './containers/Checkout';
import Payment from './containers/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// You don't need to hide this test API key, no need to use .env and .gitignore
const promise = loadStripe(
  "pk_test_51J2HdfF1niojSsYm5sf5mxCyGjAsbAJ15oZSEqlLqmKgKYNxgQhCRydDMfi799CT1eSPijoQFUNV4I7zXBRJp4MW00C56TMXoB"
);

function App() {


  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return ( 
  <Router>  
    <div className="app">
    <Header />
    <Routes>

      <Route exact path="/" element={<Home/>} /> 
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/orders" element={<Orders/>} />
      <Route exact path="/checkout" element={<Checkout/>} />
      <Route exact path="/payment" element={<Elements stripe={promise}>
          <Payment />
        </Elements>} />

    </Routes>
    </div>
  </Router>
  );
}

export default App;
