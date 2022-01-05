import React, {Component} from 'react';
import "./paper.css";

class Feature extends Component {
    render() {
        const {paper} = this.props;
        return (
            <div className={"paper"}>
                <h4>{paper.title}</h4>
                <div className={"green_line"}></div>
                <div className="paper_content">{paper.authors}</div>
                <div className="paper_content">{paper.place}</div>
            </div>
        )

    }
}

export default Feature;
