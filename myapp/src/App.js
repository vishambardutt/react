import React from 'react';
// import About from './About';
// import Contact from './Contact';
// import Users from './Users';
// import UserData from './UserData';
// import UseState from './UseState';
// import StateClassComponent from './StateClassComponent';
// import PropsinClassCom from './PropsinClassCom';
// import Home from './Home';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import PropsFun from './PropsFun';
// import Container from 'react-bootstrap/container';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  
  return (
    <div className="App">
      <div class="container">
       <div class="row">
        <Header/>
       </div>
       {/* <div class="col-12">
        <PropsFun name ="Vishambar " email ="vd@yahoo.com" address="ET Raod Banglore"/> 
        </div> */}
       <div class="row">
        <Footer/>
       </div>
       
      </div>
    </div>
// 
  );
}

export default App;
