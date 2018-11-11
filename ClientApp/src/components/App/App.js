import React, { Component } from 'react';

import Submit from '../Submit/Submit';
import Output from '../Output/Output';

import SortAPI from '../../api/SortAPI';

export default class App extends Component {
  displayName = App.name

  constructor(props) {
    super(props);
    this.state = {
      result: []
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(sortType, valueType, inputValue) {
    SortAPI.fetchSort(sortType, valueType, inputValue, (result)=> {
      const { data, error, success } = result;
      if(success) {
        this.setState({result: data.steps});
      } else {
        console.log(error);
      }
    })
  }
  //onSubmit={onSubmit} 아래
  render() {
    return (
      <div>
        <Submit onSubmit={this.onSubmit}/>
        <Output steps={this.state.result}/>
      </div>
    );
  }
}
