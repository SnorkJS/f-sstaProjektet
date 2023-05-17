import React from "react";
import "./Login.css";
import MotoGPLogo from "../../img/MotoGPLogo.svg";
import { Link } from "react-router-dom";


export default function Login() {
    return(
        <div id="login-page">
            <Link to="/">
                <img src={MotoGPLogo}/>
            </Link>
            <div className="skrap">
                <form>
                    <h1>Log In</h1>
                    <div id="email-div">
                        <div className="span-container">
                            <span id="email-span">Email</span>
                            <p className="sign-up">Need an account?</p>
                            <Link className="sign-up" to=""><p>Sign Up</p></Link>
                        </div>
                        <input type="email"/>
                    </div>
                    <div id="password-div">
                        <span id="password-span">Password</span>
                        <input type="password"/>
                    </div>
                    <button>Log In</button>
                    <Link id="forgot-password" to="">Forgot Password?</Link>
                </form>
            </div>
        </div>
    )
}