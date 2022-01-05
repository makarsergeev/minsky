import React, {Component} from 'react';
import "./sectionTitle.css";

class SectionTitle extends Component {
    render() {
        const {title, subtitle} = this.props;
        return (
            <div className="section_title">
                <h1>{title}</h1>
                <div></div>
                <p>{subtitle}</p>
            </div>
        );
    }
}

export default SectionTitle;
