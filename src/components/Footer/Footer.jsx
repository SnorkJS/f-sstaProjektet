import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Subscribe from "../Buttons/Buttons";

export default function Footer() {
    return(
        <div id="footer">
            <div className="container">
                <h2>Contact Us</h2>
                <div id="contact">
                    <ul>
                        <li>
                            <Link>Contact Us</Link>
                        </li>
                        <li>
                            <Link>Support</Link>
                        </li>
                        <li>
                            <Link>Terms of Service</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <h2>Social Networks</h2>
                <div id="social-networks">
                    <Link aria-label="instagram icon" id="instagram-icon" to="instagram.com"></Link>
                    <Link aria-label="twitter icon" id="twitter-icon" to="twitter.com"></Link>
                    <Link aria-label="youtube icon" id="youtube-icon" to="youtube.com"></Link>
                    <Link aria-label="linkedin icon" id="linkedin-icon" to="linkedin.com"></Link>
                    <Link aria-label="spotify icon" id="spotify-icon" to="spotify.com"></Link>
                </div>
            </div>
            <div id="newsletter">
                <h2>Newsletter</h2>
                <div id="newsletter-container">
                    <input id="email-input" placeholder="Email"/>
                    <button onClick={Subscribe} id="sub-btn">Subscribe</button>
                </div>
            </div>
        </div>
        
    )
}