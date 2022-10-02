import { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineBgColors } from 'react-icons/ai';
import { GoZap } from 'react-icons/go';
export default function Home() {
    return (
        <div className="home-page ">
            <div className="text-center p-[3rem] text-[24px]">Create a page to present who you are and what you do in one link.</div>
            <div className="textbutton">
                <input className="input-home" placeholder="youprofile.page/yourname" type="text" /><div className="button-style">Claim my link</div>
            </div>
            <div className="text-center p-[24px]">It’s free, and takes less than a minute</div>
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
                <div className="text-center p-[2rem] text-[24px]">
                    <span>Launch your page in seconds</span>
                </div>
            </div>
        </div>
    )
}