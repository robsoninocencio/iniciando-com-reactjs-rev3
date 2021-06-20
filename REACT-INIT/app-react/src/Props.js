import React, { Component } from 'react';

export default class Props extends Component {
    constructor(props) {
        super(props);
        const { attr, attr2, attr3 } = this.props;
        console.log(attr, attr2, attr3);
    }

    render() {
        const { attr, attr2, attr3 } = this.props;
        return (
            <div>
                {attr === 'p' ? <p>props.attr = {attr}</p> : <h1>props.attr = {attr}</h1>}
                {attr2 === 'p' ? <p>props.attr2 = {attr2}</p> : <h1>props.attr2 = {attr2}</h1>}
            </div>
        );
    }
}
