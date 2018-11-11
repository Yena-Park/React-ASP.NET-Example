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

  onSubmit(value, inputValue) {
    //api call value, inputValue
    SortAPI.fetchSort((result)=> {
      const { steps, error } = result;
      if(error) {
        console.log(error);
      } else if (steps) {
        this.setState({
          result: steps
        });
      }
    })
  }
  //onSubmit={onSubmit} 아래
  render() {
    return (
      <div>
        <Submit onSubmit={this.onSubmit}/>
        <Output result={this.state.result}/>
      </div>
    );
  }
}
