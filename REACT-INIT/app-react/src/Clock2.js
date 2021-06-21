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
                        hour: "2-digit",
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: false
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
                        hour: "2-digit",
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: false
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
