import React from "react";
import SideNav from "./SideNav";


const About = () => {
    return (
    <div>
        <SideNav />
        <h1>Sierra Butler</h1>
        <img className = "fit-picture"
     src = "https://scontent.fmkc2-1.fna.fbcdn.net/v/t1.18169-9/13770309_875854755859459_1765604785648941833_n.jpg?stp=c0.125.581.581a_dst-jpg_s851x315&_nc_cat=111&ccb=1-7&_nc_sid=da31f3&_nc_ohc=MGCss0q3K-IAX9ptTDw&tn=rDeuIP3xCI7AbFn2&_nc_ht=scontent.fmkc2-1.fna&oh=00_AfAGVq5aeeU78BvKauEWVR_-tJlshSuRJ-dHbZLCbaJ3MA&oe=64035E00"
     alt = "Me"/>

     <ul>
        <a href="https://www.linkedin.com/in/sierra-butler-463a83113/">Linkedin</a>
        
     </ul>
    </div>

    );
};

export default About;