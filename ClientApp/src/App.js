import React, { Component } from 'react';

import Submit from './components/Submit';
import Output from './components/Output';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <div>
        <Submit />
        <Output />
      </div>
    );
  }
}
