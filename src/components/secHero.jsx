import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import lottie from "../assets/lottie-placeholder.svg";
import "./secHero.css";

class SecHero extends Component {
    render() {
        return (
            <div className={"hero"}>
                <div className={"message"}>
                    <h1>Get insights from <span>any data</span>.</h1>
                    <h1>No code <span>just clicks</span>.</h1>
                    <p>An AI platform that business experts can actually use.</p>
                    <div>
                        <button className={'button-l'}>Request access</button>
                        <NavLink to={"/How-It-Works"}>How it works</NavLink>
                    </div>
                </div>
                <div className={"lottie"}><img src={lottie} alt=""/></div>
            </div>
        );
    }
}

export default SecHero;
