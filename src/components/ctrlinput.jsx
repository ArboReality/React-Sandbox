import React from "react";

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          placeholder="Type something..."
          value={this.state.input}
          onChange={this.handleChange}
        />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

export default ControlledInput;