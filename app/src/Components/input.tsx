import React, { Component } from "react";

interface InputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class Input extends Component<InputProps> {
  render() {
    return (
      <div>
        <label>
          {this.props.label}
          <input
            name={this.props.name}
            type={this.props.type}
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
          />
        </label>
      </div>
    );
  }
}

export default Input;
