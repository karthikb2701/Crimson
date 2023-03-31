
import React, { useContext,useState,Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';



import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <Router>
           <div className="2">
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
          </Routes> 
          </div>
       </Router>
    </div>
  );
}

export default App;
