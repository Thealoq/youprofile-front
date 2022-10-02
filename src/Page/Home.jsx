import { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineBgColors } from 'react-icons/ai';
import { GoZap } from 'react-icons/go';
export default function Home() {
    return (
        <div className="home-page ">
            <div style={{ padding: "3rem", textAlign:"center", fontSize: "24px"}} >Create a page to present who you are and what you do in one link.</div>
            <div className="textbutton">
                <input className="input-home" placeholder="youprofile.page/yourname" type="text" /><div className="button-style">Claim my link</div>
            </div>
            <div  style={{ padding: "2rem", textAlign:"center"}}  className="text-center">It’s free, and takes less than a minute</div>
            <div className="flex center align-center">
                <div className="icon-with">
                    <div><AiFillHeart size={24} /></div>
                    <div><span>Free</span></div>
                </div>
                <div className="icon-with">
                    <div><AiOutlineBgColors size={24} /></div>
                    <div><span>Color</span></div>
                </div>
                <div className="icon-with">
                    <div><GoZap size={24} /></div>
                    <div><span>Fast</span></div>
                </div>
            </div>
            <div className="home-page-bg">
                <div style={{ padding: "2rem", textAlign:"center", fontSize: "24px"}} className="text-center">
                    <span>Launch your page in seconds</span>
                </div>
                <div className="home-page-cards">
                    <div className="card-totel">
                        <div className="home-page-card">Claim your bio link</div>
                        <div className="card-desc">
                            <p>Choose your username, pick a theme (or design your own), and publish your page.</p>
                        </div>
                    </div>
                    <div className="card-totel">
                        <div className="home-page-card">Add all your links</div>
                        <div className="card-desc">
                            <p>Add your socials, websites, videos, anything. Your bio link is your new website.</p>
                        </div>
                    </div>
                    <div className="card-totel">
                        <div className="home-page-card">Use it everywhere</div>
                        <div className="card-desc">
                            <p>Use your bio link on your Instagram, Twitter, TikTok, emails, wherever people follow you.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-router-cards">
                <div className="home-router-carding">
                    <div className="home-router-card">Use it everywhere</div>
                    <div className="card-desc">
                        <p>lorem ipsum.</p>
                    </div>
                </div>
                <div className="home-router-carding">
                    <div className="home-router-card">Use it everywhere</div>
                    <div className="card-desc">
                        <p>lorem ipsum.</p>
                    </div>
                </div>
                <div className="home-router-carding">
                    <div className="home-router-card">Use it everywhere</div>
                    <div className="card-desc">
                        <p>lorem ipsum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}