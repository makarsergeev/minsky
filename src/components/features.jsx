import React, {Component} from 'react';
import Feature from "./feature";
import "./features.css";

class Features extends Component {
    render() {
        const {features} = this.props;
        return (
            <div className={"features"}>
                {features.map((feature) =>
                    <Feature key={feature.title} feature={feature}/>
                )}
            </div>
        );
    }
}

export default Features;
