import React from "react";
import './navbar.css';
import './image 295.png';

const Navbar = () => {
    return(
        <div>
            <div class="top">
                <img src={`./image 295.png`} alt="logo" className="logo"/>
                
                <div class="navbar">
                    <a href="#" className="">About</a>
                    <a href="#" className="">Blog</a>
                    <a href="#" className="">Events</a>
                    <a href="#" className="">Hire talents</a>
                    <a href="#" classna
                    ="">Contacts</a>
                </div>
                
                <span className="dropdown">
                    <button className="dropbtn">Quick Tasks    <i className="arrow down"></i> </button>
                    <div className="content">
                        <div>Flexible Jobs</div>
                        <div>Part-time Gigs</div>
                        <div>Post Jobs</div>
                        <div>Hire Cover Staff</div>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default Navbar;