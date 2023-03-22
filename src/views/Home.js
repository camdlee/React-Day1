import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            number: 0
        }
    }

    counter = () => {
        console.log('button clicked')
        this.setState({
          number: this.state.number + 1
        })
      }

  render() {
    return (
      <div className='home'>
        <h1>Welcome to the Landing Page</h1>
        <br></br>
        <h3>Counter:</h3>
        <h3>{this.state.number}</h3>
        <button onClick={this.counter}>Click to increase count</button>
      </div>
    )
  }
}
