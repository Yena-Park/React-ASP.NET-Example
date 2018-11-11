import React, { Component } from 'react';

import axios from 'axios';

import Submit from './components/Submit';
import Output from './components/Output';

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
    axios.get('https://localhost:5001/Sort/Sort2')
      .then(response => {
        console.log(response.data.steps);

        this.setState({
          result: response.data.steps 
        });
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
