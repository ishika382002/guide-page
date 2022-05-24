import React, { useState } from 'react';
import { Button } from './button';
import { Link } from 'react-router-dom';
import './navbar.css'
import Dropdown from './dropdown'


import image from './/BTlogo.jpg';



export default function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 360) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };


    return ( <
        >

        <
        nav className = 'navbar' >
        <
        div className = 'logo' >
        <
        img src = { image }
        alt = 'cant load'
        height = { 80 }
        width = { 80 }
        /> <
        /div> <
        Link to = '/'
        className = 'navbar-logo' >
        Hybrid Cloud Platform <
        /Link>

        <
        div className = 'menu-icon'
        onClick = { handleClick } >
        <
        i className = { click ? 'fas fa-times' : 'fas fa-bars' }
        />          <
        /div> <
        ul className = { click ? 'nav-menu active' : 'nav-menu' } >
        <
        li className = 'nav-item' >
        <
        Link to = '/'
        className = 'nav-links'
        onClick = { closeMobileMenu } >
        View <
        /Link> <
        /li> <
        li className = 'nav-item' >
        <
        Link to = '/Create'
        className = 'nav-links'
        onClick = { closeMobileMenu } >
        Connections < i className = 'fas fa-caret-down' / >
        <
        /Link> <
        /li> <
        li className = 'nav-item' >
        <
        Link to = '/Modify'
        className = 'nav-links'
        onClick = { closeMobileMenu } >
        Virtual Devices <
        /Link> <
        /li> <
        li className = 'nav-item' >
        <
        Link to = '/Deploy'
        className = 'nav-links'
        onClick = { closeMobileMenu } >
        Inventory <
        /Link> <
        /li> <
        li className = 'nav-item'
        onMouseEnter = { onMouseEnter }
        onMouseLeave = { onMouseLeave } >
        <
        Link to = '/Support'
        className = 'nav-links'
        onClick = { closeMobileMenu } >
        Support < i className = 'fas fa-caret-down' / >
        <
        /Link> { dropdown && < Dropdown / > } <
        /li> <
        li className = 'nav-item' >
        <
        Link to = '/sign-up'
        className = 'nav-links-mobile'
        onClick = { closeMobileMenu } >
        <
        /Link> <
        /li> <
        /ul> <
        Button / >
        <
        /nav> <
        />
    )
}