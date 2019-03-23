import React, { Component } from 'react';

class Kos extends Component {
    render() {
        return (
            <div className="content-img">
                <h1>{this.props.nama}</h1>
                <h3>{this.props.jumlah}</h3>
            </div>
        );
    }
}

export default Kos;
