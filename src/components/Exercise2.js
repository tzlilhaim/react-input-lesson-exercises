import React, { Component } from "react"

class Exercise2 extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      fruit: "",
    }
  }
  handleInputsChange = (event) => {
    const target = event.target
    const value = target.value
    let name = target.id.split("-")[0]
    name = name === "select" ? "fruit" : name

    this.state.fruit.length
      ? null
      : this.setState({ fruit: document.getElementById("select-input").value })
    this.setState({ [name]: value }, () => {
      console.log(`${this.state.name} selected ${this.state.fruit}`)
    })
  }

  render() {
    return (
      <div>
        <input
          id="name-input"
          value={this.state.name}
          onChange={this.handleInputsChange}
        />
        <select
          id="select-input"
          value={this.state.fruit}
          onChange={this.handleInputsChange}
        >
          <option>Apple</option>
          <option>Orange</option>
          <option>Banana</option>
          <option>Pear</option>
        </select>
      </div>
    )
  }
}

export default Exercise2
