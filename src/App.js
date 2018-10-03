import React, { Component } from 'react';
// import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      age: '',
      name: '',
      fruit: ''
    }
  }
  render() {
    return (
      <div>
        <input placeholder="name please" value={this.state.name} className="name-input" onChange={this.updateName}/>
        <select className="option-menu" onChange={this.updateFruit} value={this.state.fruit}>
          <option value="apple">Apple</option>
          <option value="orange">Orange</option>
          <option value="peach">Peach</option>
        </select>
      </div>
    )
  }

  showAlert = () => {
    if (this.state.age >= 16 ) {
      alert("welcome to the club, " + this.state.name);
    }
    else {
      alert("You are too young to enter");
    }
  }

  changeText = () => { //don't forget arrow syntax for correct `this` binding
    this.setState({
      testText: "Something else"
    });
}

updateAge = (event) => {
  this.setState({ age: event.target.value
  })
};

updateName = (event) => {
  this.setState({ name: event.target.value });
};

updateFruit = (event) => {
  this.setState({ fruit: event.target.value}, () => {
    console.log(this.state.name + " selected " + this.state.fruit);
  });
  
}
alertText = () => alert(this.state.testText)

}

export default App;
