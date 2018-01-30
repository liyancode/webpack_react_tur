import React from 'react';

class InputComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={
      placeholder:props.placeholder,
      inputType:props.inputType,
      label:props.label,
      value:null
    };
  }

  render(){
    return (
      <div className="form-group">
        <label>{this.state.label}</label>
        <input className="form-control" type={this.state.inputType} placeholder={this.state.placeholder} />
      </div>
    );
  }
}

export default InputComponent;