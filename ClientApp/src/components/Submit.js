import React, { Component } from 'react';

class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'Numeric',
      inputValue:'',
      result: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
    console.log(e.target.value);
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
    console.log(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {value, inputValue} = this.state;
    console.log(value, inputValue);

    const { onSubmit } = this.props;

    onSubmit(value, inputValue);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div>
          Input type 
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Numeric">Numeric</option>
              <option value="String">String</option>
            </select>
          </div>
          <div>
            <input 
              onChange={this.handleInputChange}
              value={this.state.inputValue} 
              placeholder="Input string of data seperated by commas"
            />
          </div>
         <div><button>Submit</button></div>
        </div>
      </form>
    );
  }
}

export default Submit;