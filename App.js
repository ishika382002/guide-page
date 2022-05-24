import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Issues from './components/pages/Issues';
import Guide from './components/pages/Guide';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import History from './components/pages/History';
// import Logo fron './components/BT.png'


function App() {
    return (

        <
        Router >
        <
        Navbar / > { /* <img src={Logo}/> */ } <
        Routes >
        <
        Route path = '/Issues'
        element = { < Issues / > }
        /> <
        Route path = '/History'
        element = { < History / > }
        /> <
        Route path = '/Guide'
        element = { < Guide / > }
        /> <
        Route path = '/ContactUs'
        element = { < ContactUs / > }
        /> <
        Route path = '/SignUp'
        element = { < SignUp / > }
        /> <
        /Routes> <
        /Router>
    );
}

export default App;