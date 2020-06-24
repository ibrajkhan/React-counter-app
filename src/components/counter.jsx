import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 1,
        tags: [ ]
    };

  renderTag(){
    if (this.state.tags.length === 0) return <p>There is no tag's</p>
    return <ul>{this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}</ul>
  }
  render() {
    return (
      <div>
        <span className = {this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className= "btn btn-secondary btn-sm">Increment</button>
        <div>
        {this.state.tags.length === 0 && "Please create a new tags"}
        {this.renderTag()}
        </div>
        
      </div>
    );
  }
    getBadgeClasses() {
        let classes = "badge m-2 p-2 badge-";
        classes += (this.state.count === 0) ? "primary" : "warning";
        return classes;
    }

  formatCount(){
      const {count} = this.state
      return count === 0 ?  "zero" : count
  }
}

export default Counter;
