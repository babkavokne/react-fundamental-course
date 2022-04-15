import React from 'react';

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <div><button onClick={this.increment}>Increment</button></div>
        <div><button onClick={this.decrement}>Decrement</button></div>
      </div>
    )
  }
}

export default ClassCounter;