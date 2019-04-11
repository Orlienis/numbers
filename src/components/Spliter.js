import React, {Component} from 'react';

class Spliter extends Component {
    render() {
        let {char} = this.props;

        return (
            <li>
                {char != null && char !== "" ? char : "\xa0"}
            </li>
        );
    }
}

export default Spliter;