import React from "react"

class Counter extends React.Component {
    // "state" is a special React variable
    state = {
        number:0
    }

    // arrow function
    increase = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    decrease = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    displayNumber() {
        if (this.state.number %2 === 0) {
            return <span style={{color:'blue'}}>{this.state.number}</span>;
        } else {
            return <span style={{color:'green'}}>{this.state.number}</span>
        }
    }

    render() {
        return (
            <div>
                <h1>Current Count: {this.displayNumber()}</h1>
                <button onClick={this.increase}>Increment</button>
                <button onClick={this.decrease}>Decrement</button>
                <span>{this.state.number % 2 === 0 ? "Even" : "Odd"}</span>
            </div>
        );
    }
}

export default Counter;