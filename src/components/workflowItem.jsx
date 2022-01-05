import React, {Component} from 'react';
import "./workflowItem.css";

class WorkflowItem extends Component {
    render() {
        const {title, content} = this.props
        return (
            <div className={"workflow_item"}>
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
        );
    }
}

export default WorkflowItem;
