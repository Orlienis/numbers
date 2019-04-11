import React, {Component} from 'react';

class Digit extends Component {
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    render() {
        return (
            <p>
                {Math.floor(Math.random() * 10)}
            </p>
        );
    }
}

export default Digit;