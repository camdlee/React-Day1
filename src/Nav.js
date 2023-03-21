import React, { Component } from 'react'

export default class Nav extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }

    render() {
    return (
    <div>        
        <nav className="navbar navbar-expand-lg navbar-light">
            <a style={{color: '#c3073f'}} className="navbar-brand" href="#">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a style={{color: '#c3073f'}} className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                    <a style={{color: '#c3073f'}} className="nav-link" href="#">Header</a>
                </li>
                <li className="nav-item">
                <a style={{color: '#c3073f'}} className="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
            </div>
        </nav>
    </div>
    )
  }
}
