import React, {Component} from 'react';
import "./feature.css";

class Feature extends Component {
    render() {
        const {feature} = this.props;
        return (
            <div className={"feature"}>
                <div className={`feature_icon + ${feature.icon}`}>
                </div>
                <div className="feature_title">{feature.title}</div>
                <div className="feature_content">{feature.content}</div>
            </div>
        )

    }
}

export default Feature;
