import React, {Component} from 'react';
import "./toggle.css";

class Toggle extends Component {
    render() {
        const {title, content, image, className} = this.props;
        return (
            <div className={className}>
                <h4>{title}</h4>
                <div className="toggle_content">{content}</div>
                <button onClick={() => this.props.onChange(image)}></button>
            </div>
        );
    }
}

export default Toggle;
