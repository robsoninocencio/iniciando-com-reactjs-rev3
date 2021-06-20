import React, { Component } from 'react';

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Robson',
            age: 43
        };
        console.log(this.state);
    }

    render() {
        const { name, age } = this.state;
        return (
            <div>
                <p>State</p>
                <p>{name}</p>
                <p>{age}</p>
            </div>
        );
    }
}