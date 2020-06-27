import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };
  handleIncrement = (product) => {
    console.log(this.state.value);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(this.state.value)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick = {() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 p-2 badge-";
    classes += this.state.value === 0 ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
