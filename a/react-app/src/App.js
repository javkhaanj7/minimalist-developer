import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import 'moment/min/locales';

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
            <i className="fa fa-code-fork" aria-hidden="true"></i>
          </a>
        </div>
        <div className="flag">
          <span className="flag-icon flag-icon-mn" onClick={() => this.changeLocale('mn')}></span>
          <span className="flag-icon flag-icon-gb" onClick={() => this.changeLocale('en')}></span>
        </div>
        <div className="date">
          <i className="fa fa-clock-o" aria-hidden="true"></i> {this.state.today}
        </div>
      </div>
    )
  }
}

export default App;
