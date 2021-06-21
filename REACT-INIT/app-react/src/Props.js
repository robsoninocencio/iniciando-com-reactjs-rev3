import React, { Component } from 'react';
import Panel from './Panel';

export default class Props extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const { attr, attr2 } = this.props;
        return (
            <div>
                {attr === 'p' ? <p>props.attr = {attr}</p> : <h1>props.attr = {attr}</h1>}
                {attr2 === 'p' ? <p>props.attr2 = {attr2}</p> : <h1>props.attr2 = {attr2}</h1>}
                <Panel headercolor="red" bordercolor="blue" headertext="This is a header" data="School of net" />
                <Panel headercolor="gray" bordercolor="purple" headertext="This is a header" data="School of net" />
            </div>
        );
    }
}
