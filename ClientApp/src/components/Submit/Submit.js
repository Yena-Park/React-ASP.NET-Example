import React, { Component } from 'react';
import './Submit.css'

class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:'',
      sortType: 'Insertion',
      valueType: 'int'
    };

    this.handleInputValueChange = this.handleInputValueChange.bind(this);
    this.handleSortTypeChange = this.handleSortTypeChange.bind(this);
    this.handleValueTypeChange = this.handleValueTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputValueChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleSortTypeChange(e) {
    this.setState({
      sortType: e.target.value
    });
  }

  handleValueTypeChange(e) {
    this.setState({
      valueType: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { sortType, valueType, inputValue } = this.state;
    const { onSubmit } = this.props;
    onSubmit(sortType, valueType, inputValue);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div className="container">
          <div className="input-container">
            <p>Input:</p>
            <input
              id="input"
              onChange={this.handleInputValueChange}
              value={this.state.inputValue} 
              placeholder="Input string of data seperated by commas"
            />
          </div>
          <div className="type-container">
            <div className="sortType">
              <p>Sort Type </p>
              <select id="sortSelect" value={this.state.sortType} onChange={this.handleSortTypeChange}>
                <option value="Insertion">Insertion</option>
              </select>
            </div>
            <div className="valueType">
              <p>Value Type </p>
              <select id="valueSelect" value={this.state.valueType} onChange={this.handleValueTypeChange}>
                <option value="int">int</option>
                <option value="string">string</option>
              </select>
            </div>
          </div>
          <button className="button">Sort</button>
        </div>
      </form>
    );
  }
}

export default Submit;