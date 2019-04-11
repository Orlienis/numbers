import React, {Component} from 'react';
import Digit from "./Digit";

class Number extends Component {
    render() {
        let { size,split } = this.props;
        return (
            <div>
                <Digit />

            </div>
        );
    }
}

export default Number;