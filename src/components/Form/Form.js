import React, {Component} from 'react';
import './form.css';

class Form extends Component {

    render() {
        return (
            <div className={"n-form"}>
                <label htmlFor="n-size">Size</label>
                <input onChange={this.props.updateSize} id={"n-size"} type={"number"} min={"0"} max={"25"}
                       placeholder={this.props.size}/>
                <label htmlFor="n-spliter">Spliter</label>
                <input onChange={this.props.updateSpliter} id={"n-spliter"} type={"text"} maxLength={"1"}
                       placeholder={"auto"}/>
                <label htmlFor="n-time">Time (
                    <small>seg</small>
                    ) </label>
                <input onChange={this.props.updateTime} id={"n-time"} type={"number"} min={"0.5"} max={"25"}
                       placeholder={"2"}/>
                <label htmlFor="n-distance">Distance</label>
                <input onChange={this.props.updateDist} id={"n-distance"} type={"number"} min={"0"} max={"6"}
                       placeholder={"3"}/>
                <button onClick={this.props.show} id={"n-start"}>Start</button>
            </div>
        );
    }
}

export default Form;