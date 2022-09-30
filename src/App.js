import logo from './logo.svg';
import './App.css';


import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";

import Login from './containers/Login';
import Home from './containers/Home';
import Header from './containers/Header';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import React, { useEffect } from 'react';

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

    </Routes>
    </div>
  </Router>
  );
}

export default App;
