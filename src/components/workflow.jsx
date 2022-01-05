import React, {Component} from 'react';
import WorkflowItem from "./workflowItem";
import "../assets/workflowBG.svg"
import "./workflow.css";

class Workflow extends Component {
    render() {
        const {workflow} = this.props;
        return (
            <div className={"workflow"}>
                {workflow.map((item) =>
                    <div className={"workflow_column"} key={item.title}>
                        <div className={"workflow_column_title"}>{item.title}</div>
                        {item.blocks.map((block) =>
                            <WorkflowItem key={block.title} title={block.title} content={block.content}/>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default Workflow;
