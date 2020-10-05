import React, { Component } from "react"

class Exercise1 extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      age: "",
    }
  }

  handleInputsChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.id.split("-")[0]

    this.setState({ [name]: value })
  }
  goToBar = () => {
    const name = this.state.name
    const age = this.state.age
    console.log(name, age)
    age > 17
      ? alert(
          `Come in, ${name}, you're allowed into the bar since you're ${age} years old.`
        )
      : alert(
          `${name}, you are not allowed into the bar since you're only ${age} years old.`
        )
  }

  render() {
    return (
      <div>
        <input id="name-input" onChange={this.handleInputsChange} />
        <input id="age-input" onChange={this.handleInputsChange} />
        <button onClick={this.goToBar}>Go to Bar</button>
      </div>
    )
  }
}

export default Exercise1
