import React, { Component } from 'react';

class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {value:'Numeric', inputValue:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleInputChange(e) {
    this.setState({value: e.target.inputValue})
  }

  handleSubmit(e) {

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
          <div><input value={this.state.inputValue} placeholder="Input string of data seperated by commas"/></div>
          <div><input type="submit" value="submit"/></div>
        </div>
      </form>
    );
  }
}

export default Submit;