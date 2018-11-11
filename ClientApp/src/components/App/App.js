import React, { Component } from 'react';

import Submit from '../Submit/Submit';
import Output from '../Output/Output';

import SortAPI from '../../api/SortAPI';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: [],
      error: null
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(sortType, valueType, inputValue) {
    SortAPI.fetchSort(sortType, valueType, inputValue, (result)=> {
      const { data, error, success } = result;
      console.log(result);
      if(success) {
        this.setState({
          result: data.steps,
          error: null
        });
      } else {
        this.setState({error});
      }
    })
  }

  render() {
    return (
      <div>
        <Submit onSubmit={this.onSubmit}/>
        <Output steps={this.state.result} error={this.state.error}/>
      </div>
    );
  }
}
