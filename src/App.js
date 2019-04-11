import React, {Component} from 'react';
import './App.css';
import Number from "./components/Number";
import Form from "./components/Form/Form";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: 12,
            spliter: {pos: 4, char: '-'},
            time: 2,
            dist: 3,
            number: <Number size={12} spliter={{pos: 4, char: '-'}}/>,
        };
    }


    updateSize(e) {
        this.setState({
            size: e.target.value,
        });
    }

    updateSpliter(e) {
        this.setState({
            spliter: {pos: 4, char: e.target.value},
        });
    }

    updateTime(e) {
        this.setState({
            time: e.target.value
        });
    }

    updateDist(e) {
        this.setState({
            dist: e.target.value
        });
    }

    hide() {
        setTimeout(function() {
            let el = document.getElementById("number");
            el.style.display = "none";
        }, this.state.time * 1000);
    }

    show() {
        setTimeout(function() {
            let el = document.getElementById("number");
            el.style.display = "flex";
        }, 1);
        this.hide();
    }


    render() {
        return (
            <div className="n-wrap">
                <header className="n-header">
                    <Form size={this.state.size} updateSize={this.updateSize.bind(this)}
                          updateSpliter={this.updateSpliter.bind(this)}
                          updateTime={this.updateTime.bind(this)}
                          updateDist={this.updateDist.bind(this)}
                          show={this.show.bind(this)}
                    />
                </header>
                <section id={"n-display"} className={"n-display"}>
                    {this.state.number}
                </section>
            </div>
        );
    }
}

export default App;