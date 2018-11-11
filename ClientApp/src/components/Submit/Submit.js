import React, { Component } from 'react';
import './Submit.css'

class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:'',
      sortType: 'Numeric',
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
    const {sortType, valueType, inputValue} = this.state;
    const { onSubmit } = this.props;
    onSubmit(sortType, valueType, inputValue);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="input-container">
            Input: <br/>
            <input
              onChange={this.handleInputValueChange}
              value={this.state.inputValue} 
              placeholder="Input string of data seperated by commas"
            />
          </div>
          <div className="type-container">
            <div className="sortType">
              Sort Type <br/>
              <select value={this.state.sortType} onChange={this.handleSortTypeChange}>
                <option value="Quick">Quick</option>
                <option value="Bubble">Bubble</option>
                <option value="Bucket">Bucket</option>
              </select>
            </div>
            <div className="valueType">
              Value Type <br/>
              <select value={this.state.valueType} onChange={this.handleValueTypeChange}>
                <option value="Numeric">Numeric</option>
                <option value="String">String</option>
              </select>
            </div>
          </div>
          <div><button className="button">Sort</button></div>
        </div>
      </form>
    );
  }
}

export default Submit;