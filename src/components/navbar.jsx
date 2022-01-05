import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import JSON from '../content/navigation.json'
import './navbar.css'
import logo from "../assets/logo.svg"

class Navbar extends Component {
    state = {
        navbar: JSON,
        mobileNav: false
    };

    toggleMobileNav = () => {
        const {mobileNav} = this.state;
        mobileNav ? this.setState({mobileNav: false}) : this.setState({mobileNav: true});
    }

    render() {
        return (
            <React.Fragment>
                <div className="navbar desktop">
                    <NavLink to="/"><img src={logo} alt="Home"/></NavLink>
                    <div>
                        <ul>
                            {this.state.navbar.map((item) =>
                                <li key={item.title}>
                                    <NavLink
                                        to={item.linkURL}>{item.title}
                                    </NavLink>
                                </li>)}
                            <li><a href="https://minsky.ai/">Log in</a></li>
                        </ul>
                        <button>Request access</button>
                    </div>
                </div>
                <div className="navbar mobile">
                    <NavLink to="/"><img src={logo} alt="Home"/></NavLink>
                    <div>
                        {this.state.mobileNav &&
                            <ul>
                                <button onClick={this.toggleMobileNav} className={"mobileNav"}></button>
                                {this.state.navbar.map((item) =>
                                    <li key={item.title}>
                                        <NavLink
                                            to={item.linkURL}>{item.title}
                                        </NavLink>
                                    </li>)}
                                <li><a href="https://minsky.ai/">Log in</a></li>
                            </ul>}
                    </div>
                    <div>
                        <button>Request access</button>
                        <button onClick={this.toggleMobileNav} className={"mobileNav"}></button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar;
