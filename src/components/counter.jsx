import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // Change code above this line
  }
  // Change code below this line
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }

  reset() {
    this.setState(state => ({
      count: 0
    }));
  }
  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};


export default Counter;



export const FunctionalCounter = (props) => {

  function increment() {
    props.setState(state => ({
      count: state.count + 1
    }));
  }

  function decrement() {
    props.setState(state => ({
      count: state.count - 1
    }));
  }

  function reset() {
    props.setState(state => ({
      count: 0
    }));
  }

  return (
    <div>
      <button className='inc' onClick={ increment}>Increment!</button>
     <button className='dec' onClick={decrement}>Decrement!</button>
        <button className='reset' onClick={reset}>Reset</button>
        <h1>Current F Count: {props.count}</h1>
      </div>
    );
}