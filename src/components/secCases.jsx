import React, {Component} from 'react';
import SectionTitle from "./sectionTitle";
import CONTENT from "../content/secCases.json";
import Features from "./features";
import "./secCases.css";

class SecCases extends Component {
    render() {
        const {title, subtitle, features} = CONTENT;
        return (
            <div className={"secCases"}>
                <SectionTitle title={title} subtitle={subtitle}/>
                <Features features={features}/>
            </div>
        );
    }
}

export default SecCases;
