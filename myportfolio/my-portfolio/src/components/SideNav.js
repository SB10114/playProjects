import React from "react";


const SideNav = () => {
    return (
        <div className = "sideNav">
            <img src = "images/myLogo.jpg" alt = "Sierra Butler Logo" height = {150} width = {150}></img>
            <a href = "/">Home</a>
            <a href = "/about">About</a>
            <a href = "/projects">Projects</a>
            <a href = "/contact">Contact</a>
            <a href = "/resume">Resume</a>
            {/* <a href="/name">{props.name}</a> */}
        </div>
 );
};
export default SideNav;
