import React, { useState } from "react";

const Example = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello hook {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}> ++ </button>
      <button onClick={decrementItem}> -- </button>
    </div>
  );
};

class Example2 extends React.Component {
  state = {
    item: 1
  }
  incrementItem = () => {
    this.setState(state => {
      return {
        item: state.item + 1
      }
    })
  }

  decrementItem = () => {
    this.setState(state => {
      return {
        item: state.item - 1
      }
    })
  }
  render() {
    const { item } = this.state
    return (
      <div className="App">
        <h1>Hello class {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.incrementItem}> ++ </button>
        <button onClick={this.decrementItem}> -- </button>
      </div>
    )
  }
}

export default Example
