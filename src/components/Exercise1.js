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
                <input id="name-input" />
                <input id="age-input" />
                <button>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;