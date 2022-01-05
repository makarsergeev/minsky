import React, {Component} from 'react';
import "./carousel.css";
import imageGraph from "../assets/platform/graph.png"
import imageEvidence from "../assets/platform/evidence.png"
import imageOvertime from "../assets/platform/overtime.png"
import Toggle from "./toggle";

class Carousel extends Component {
    state = {
        image: "imageEvidence"
    }

    getToggleClass(toggle) {
        let classes = "toggle";
        classes += this.state.image === toggle ? " toggle-active" : "";
        return classes;
    }

    renderImage() {
        const {image} = this.state
        if (image === "imageGraph") {
            return <img src={imageGraph} alt=""/>
        } else if (image === "imageEvidence") {
            return <img src={imageEvidence} alt=""/>
        } else if (image === "imageOvertime") {
            return <img src={imageOvertime} alt=""/>
        }
    };

    handleImageChange = (image) => {
        console.log(image);
        this.setState({image});
    };

    render() {
        const {toggles} = this.props;
        return (
            <div className={"carousel"}>
                <div className="carousel_screens">
                    {this.renderImage()}
                </div>
                <div className="carousel_toggles">
                    {toggles.map((item) =>
                        <Toggle className={this.getToggleClass(item.image)}
                                key={item.title}
                                title={item.title}
                                content={item.content}
                                image={item.image}
                                onChange={this.handleImageChange}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Carousel;
