import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import 'moment/locale/mn';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCodeBranch, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faCodeBranch, faClock);

class App extends Component {

  constructor() {
    super();
    moment.locale('mn');
    this.state = {
      today: moment().format('ll')
    };
    this.changeLocale = this.changeLocale.bind(this);
  }

  changeLocale(locale) {
    moment.locale(locale);
    this.setState({ today: moment().format('ll') });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="title">
          React <a rel="noreferrer" href="https://github.com/javkhaanj7/minimalist-developer/tree/master/a/react-app" target="_blank">
            <FontAwesomeIcon icon="code-branch" />
          </a>
        </div>
        <div className="flag">
          <span className="flag-icon flag-icon-mn" onClick={() => this.changeLocale('mn')}></span>
          <span className="flag-icon flag-icon-gb" onClick={() => this.changeLocale('en')}></span>
        </div>
        <div className="date">
          <FontAwesomeIcon icon="clock" /> {this.state.today}
        </div>
      </div>
    )
  }
}

export default App;
