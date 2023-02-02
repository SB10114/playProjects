import React from "react";


const SideNav = (props) => {
    return (
        <div className = "sideNav">
            <img src = "images/myLogo.jpg" alt = "Sierra Butler Logo" height = {150} width = {150}></img>
            <a href = "#section">About</a>
            <a href = "#section">Projects</a>
            <a href = "#section">Contact</a>
            <a href="#section">{props.name}</a>
        </div>
 );
};
export default SideNav;
