import React, { Component } from 'react';
import './Clock.css';

export default class Clock2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
                .toLocaleString(
                    'en-US',
                    {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: true
                    }
                )
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.updateClock(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    updateClock() {
        this.setState({
            time: new Date()
                .toLocaleString(
                    'en-US',
                    {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: true
                    }
                ),
            name: 'Robson'
        })
    }

    render() {

        const { time } = this.state;
        return (
            <div>
                <h1>{time}</h1>
            </div>
        );
    }
}
