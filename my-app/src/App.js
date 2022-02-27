import {
  BrowserRouter as Router,
 
  Route,
  
  Routes
} from "react-router-dom";
import React from 'react';
import './App.css';
import Create from './components/Create';



function App() {
  return (
    // <Login/>npm yarn add react-router-dom
    <Router>
      <Routes>
        <Route exact path="/" element={<Create/>}>
        </Route>
      </Routes>
      
    </Router>
  );
}

export default App;