import {
  BrowserRouter as Router,
 
  Route,
  
  Routes
} from "react-router-dom";
import React from 'react';
import './App.css';
import Create from './components/Create';
import Login from './components/Login';



function App() {
  return (
    // <Login/>npm yarn add react-router-dom
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}>
        </Route>
      </Routes>
      <Routes>
        <Route exact path="/create" element={<Create/>}>
        </Route>
      </Routes>
      
    </Router>
  );
}

export default App;