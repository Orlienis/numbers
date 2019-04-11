import React, {Component} from 'react';

class Digit extends Component {
    render() {
        return (
            <li>
                {Math.floor(Math.random() * 10)}
            </li>
        );
    }
}

export default Digit;