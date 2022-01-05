import React, {Component} from 'react';
import CONTENT from "../content/secPlatform.json";
import SectionTitle from "./sectionTitle";
import Carousel from "./carousel";

class SecPlatform extends Component {
    render() {
        const {title, subtitle, toggles} = CONTENT
        return (
            <div>
                <SectionTitle title={title} subtitle={subtitle}/>
                <Carousel toggles={toggles}/>
            </div>
        );
    }
}

export default SecPlatform;
