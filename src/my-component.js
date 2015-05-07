import React from "react";
// Wait until https://github.com/babel/babel-eslint/issues/72 is fixed...
/*eslint-disable no-unused-vars*/
import autobind from "autobind-decorator";
/*eslint-enable no-unused-vars*/


export default class MyComponent extends React.Component {
  static displayName = "MyComponent"
  static defaultProps = {initialCount: 0}

  state = {count: this.props.initialCount }

  @autobind
  handleClick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        <div>Clicks: {this.state.count}</div>
        <button onClick={this.handleClick}>Add 1</button>
      </div>
    );
  }
}
