import React from 'react';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      result: 0,
      num1: "",
      num2: ""
    };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.divide = this.divide.bind(this);
    this.multiply = this.multiply.bind(this);
    this.clear = this.clear.bind(this);
  }

// To reset the input field to be empty (string) when user backspace
  setNum1 (e){
    e.preventDefault();
    let num1;
    if (e.target.value) {
      num1 = parseInt(e.target.value);
    } else {
      num1 = "";
    }
    this.setState({num1});
  }

  setNum2 (e){
    e.preventDefault();
    let num2;
    if (e.target.value) {
      num2 = parseInt(e.target.value);
    } else {
      num2 = "";
    }
    this.setState({num2});
  }

  add (e) {
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({result});
  }

  subtract (e) {
    e.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({result});
  }

  divide (e) {
    e.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({result});
  }

  multiply (e) {
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({result});
  }

  clear (e) {
    e.preventDefault();
    this.setState({result: 0, num1: "", num2: ""});
  }


  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange={this.setNum1} type="text" value={this.state.num1}/>
        <input onChange={this.setNum2} type="text" value={this.state.num2}/>
        <br/>
        <button onClick={this.clear}>clear</button>
        <br/>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.divide}>*</button>
        <button onClick={this.multiply}>/</button>
      </div>
    );
  }
}

export default Calculator;
