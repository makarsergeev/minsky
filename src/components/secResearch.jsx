import React, {Component} from 'react';
import SectionTitle from "./sectionTitle";
import CONTENT from '../content/secResearch.json';
import Papers from "./papers";

class SecResearch extends Component {
    render() {
        const {title, subtitle, papers} = CONTENT;
        return (
            <div className={"secHowItWorks"}>
                <SectionTitle title={title} subtitle={subtitle}/>
                <Papers papers={papers}/>
            </div>
        );
    }
}

export default SecResearch;
