import "./Layout.css"
import { useState, useEffect } from "react";
import {
    RiMenuFill
} from 'react-icons/ri';
export default function Navbar() {
    const [Open, SetOpen] = useState(true)
    function  OpenMenu() {
      if(Open) {
        document.getElementById("menu").style.display = "flex"
        SetOpen(false)
      } else {
        document.getElementById("menu").style.display = "none"
        SetOpen(true)
      }
    }
    return (
        <div className="center">
            <div className="navbar-body">
                <div className="navbar-with">
                    <div className="navbar-title">
                      <a href="/"><span>youprofile.<b className="title-page">page</b></span></a>
                    </div>
                    <div className="nav-bg">
                        <div className="withiy"><a href="/Login">Log in</a></div>
                        <div className="nav-button"><a href="/Signup">Sign up</a></div>
                        <div onClick={event => OpenMenu()}  className="nav-respon-content"><RiMenuFill size={24} /></div>
                    </div>
                    <div id="menu" className="responsive-menu">
                        <div><a href="/Login">Log in</a></div>
                        <div><a href="/Signup">Sign up</a></div>
                    </div>
                </div>
            </div>

        </div>
    )
}