import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
    render() {
        const returnClock = () => {
            return new Date()
                .toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                })
        };
        const color = 'red';
        return (
            <div>
                <h1 className={color}>
                    {
                        returnClock()
                    }
                </h1>
            </div>
        );
    }
}

export default Clock;