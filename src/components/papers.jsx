import React, {Component} from 'react';
import "./papers.css";
import Paper from "./paper";

class Features extends Component {
    render() {
        const {papers} = this.props;
        return (
            <div className={"papers"}>
                {papers.map((paper) =>
                    <Paper key={paper.title} paper={paper}/>
                )}
            </div>
        );
    }
}

export default Features;
