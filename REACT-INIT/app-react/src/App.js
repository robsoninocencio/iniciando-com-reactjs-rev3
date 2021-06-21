import React, { Component } from 'react';
import './App.css';
import Hello from './Hello';
import Clock from './Clock';
import Props from './Props';
import State from './State';
import Clock2 from './Clock2';
import Events from './Events';
import Events2 from './Events2';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: ''
    }
  }

  showHello = () => {
    this.setState({
      component: <Hello />
    })
  }

  showClock = () => {
    this.setState({
      component: <Clock />
    })
  }

  showProps = () => {
    this.setState({
      component: <Props attr="p" attr2="outro" />
    })
  }

  showState = () => {
    this.setState({
      component: <State />
    })
  }

  showClock2 = () => {
    this.setState({
      component: <Clock2 />
    })
  }

  showEvents = () => {
    this.setState({
      component: <Events />
    })
  }

  showEvents2 = () => {
    this.setState({
      component: <Events2 />
    })
  }

  render() {
    const { component } = this.state;
    return (
      <div>
        <header className="App-header">
          <button type="button" onClick={this.showHello}>Hello</button>
          <button type="button" onClick={this.showClock}>Clock</button>
          <button type="button" onClick={this.showProps}>Props</button>
          <button type="button" onClick={this.showState}>State</button>
          <button type="button" onClick={this.showClock2}>Clock2</button>
          <button type="button" onClick={this.showEvents}>Events</button>
          <button type="button" onClick={this.showEvents2}>Events2</button>

        </header>
        <div className="App-body">
          {component}
        </div>

      </div>
    );
  }

}
