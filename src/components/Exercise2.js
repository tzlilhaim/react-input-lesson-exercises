import React, { Component } from 'react';

class Exercise2 extends Component {

constructor() {
    super()
    this.state = {
        name: "",
        fruit: ""
    }
}

render() {
    return (
        <div>
            <input id="name-input" />
            <select id="select-input"></select>
        </div>
    );
}
}

export default Exercise2;