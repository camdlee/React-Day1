import React, { Component } from 'react'

export default class Footer extends Component {
  constructor(){
    super()
    this.state = {
        
    }
  }

  render() {
    return (
      <div>
        <footer className="text-center text-lg-start footer">
            <div className="text-center p-3">
                © 2023 Copyright:
                <a style={{color: '#c3073f'}} href="https://www.pokemon.com/us" target="_blank"> Surprise Link</a>
            </div>
        </footer>
      </div>
    )
  }
}
