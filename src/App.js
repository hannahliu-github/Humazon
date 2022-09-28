import logo from './logo.svg';
import './App.css';


import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";

import Login from './containers/Login';
import Home from './containers/Home';

function App() {
  return ( 
  <Router>  
    <div className="app">
    <Routes>

      <Route exact path="/" element={<Home/>} /> 
      <Route exact path="/login" element={<Login/>} />
         
    </Routes>
    </div>
  </Router>
  );
}

export default App;
