import React, { Component } from 'react';
import './Events.css'

export default class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: 0
        }
        // this.clickMethod = this.clickMethod.bind(this)
    }

    // clickMethod() {
    //     console.log(' --- CLICK METHOD BEGIN --- ', this.state.clicked)
    //     this.setState({ clicked: this.state.clicked + 1 })
    //     console.log(' --- CLICK METHOD END --- ', this.state.clicked)
    // }

    clickMethod = () => {
        this.setState({ clicked: this.state.clicked + 1 })
    }

    render() {
        const { clicked } = this.state;
        return (
            <div className="Event-body">
                <button className="Event-button" onClick={this.clickMethod} type="button">Click me</button>
                {clicked}
            </div>
        )
    }
}