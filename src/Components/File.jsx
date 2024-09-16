import { Component } from "react";

export default class File extends Component {
  render() {
    return (
      <div>
        <span>📄</span>
        {this.props.name}
      </div>
    );
  }
}