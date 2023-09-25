import React, { Component } from 'react';
import './ClassComponent.css';

class ClassComponent extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  incrementCount2 = () => {
    this.setState({ count: this.state.count + 2 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  zero = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="class-component">
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>+1</button>
        <button onClick={this.incrementCount2}>+2</button>
        <button onClick={this.decrementCount}>-1</button>
        <button onClick={this.zero}>Zero</button>
        <p>Play with us</p>
      </div>
    );
  }
}

export default ClassComponent;
