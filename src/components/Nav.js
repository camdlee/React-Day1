import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
    return (
    <div>        
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link style={{color: '#c3073f'}} className="navbar-brand" to="/">
                React App
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link style={{color: '#c3073f'}} className="nav-link" to="/pokesearch">PokeSearch</Link>
                </li>
                <li className="nav-item">
                    <Link style={{color: '#c3073f'}} className="nav-link" to="/todolist">To Do List</Link>
                </li>
                <li className="nav-item">
                <Link style={{color: '#c3073f'}} className="nav-link disabled" to="/">Disabled</Link>
                </li>
            </ul>
            </div>
        </nav>
    </div>
    )
  }
}
