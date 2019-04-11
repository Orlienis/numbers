import React, {Component} from 'react';
import Digit from "./Digit";
import Spliter from "./Spliter";

class Number extends Component {

    createList = (size, spliter) => {
        let li = [];
        let cont = spliter["pos"];

        for (let i = 0; i < size; i++) {
            if (cont === 0) {
                li.push(<Spliter char={spliter["char"]}/>);
                li.push(<Digit />);
                cont = spliter["pos"]-1;
            }else{
                li.push(<Digit />);
                cont--;
            }
        }
        return li;
    }

    render() {
        let {size, spliter} = this.props;
        return (
            <div>
                <ul className={"number"} id={"number"}>
                    {this.createList(size, spliter)}
                </ul>
            </div>
        );
    }
}

export default Number;