import React from 'react';
import {render} from 'react-dom';

import 'jquery';
import 'bootstrap/dist/js/bootstrap';

import AwesomeComponent from './js/AwesomeComponent.js';
import InputComponent from './js/InputComponent.js';

import './css/style.css';

class App extends React.Component {
  render () {
    return (
        <div>
          <InputComponent label="Input 01"/>
          <InputComponent label="Input 02"/>
        </div>
      );
  }
}

render(<App/>, document.getElementById('root_div'));