import React, { Component } from 'react';

export default class Panel extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const { headercolor, bordercolor, headertext, data } = this.props;
        return (
            <div className="panel" style={{ border: `1px solid ${bordercolor}`, width: '500px', height: '100px', position: 'relative' }}>
                <div className="panel-head" style={{ width: '100%', height: '50px', background: headercolor }}>
                    {headertext}
                </div>
                <div className="panel-body">
                    {data}
                </div>
            </div>
        );
    }
}
