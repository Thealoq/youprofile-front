import "./Layout.css"
import { useState, useEffect } from "react";
export default function Navbar() {
    return (
        <div className="center">
            <div className="navbar-body">
                <div className="navbar-with">
                    <div className="navbar-title">
                        <span>youprofile.<b className="title-page">page</b></span>
                    </div>
                    <div className="nav-bg">
                        <div className="withiy">Log in</div>
                        <div className="nav-button">Sign up</div>
                    </div>
                </div>
            </div>
        </div>
    )
}