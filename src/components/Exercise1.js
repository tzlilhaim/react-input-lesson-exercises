import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }

    render() {
        return (
            <div>
                <input id="i1" />
                <input id="i2" />
                <button>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;