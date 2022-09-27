import logo from './logo.svg';
import './App.css';


import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";

import Login from './containers/Login';

function App() {
  return ( 
  <Router>  
    <div className="app">
    <Routes>
      <Route exact path="/login" element={<Login/>} />
    </Routes>
    </div>
  </Router>
  );
}

export default App;
