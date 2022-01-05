import React, {Component} from 'react';
import SectionTitle from "./sectionTitle";
import CONTENT from '../content/secHowItWorks.json'
import Workflow from "./workflow";
import Features from "./features";

class SecHowItWorks extends Component {
    render() {
        const {title, subtitle, workflow, features} = CONTENT;
        return (
            <div className={"secHowItWorks"}>
                <SectionTitle title={title} subtitle={subtitle}/>
                <Workflow workflow={workflow}/>
                <Features features={features}/>
            </div>
        );
    }
}

export default SecHowItWorks;
