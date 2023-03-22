import './App.css';
import Footer from './components/Footer';
import Home from './views/Home';
import Nav from './components/Nav'
import Pokesearch from './views/Pokesearch';
import Toast from './components/Toast';
import Todolist from './views/Todolist';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import React, { Component } from 'react'


export default class App extends Component {
  constructor(){
    super()
  }

  render() {
  return (
    <BrowserRouter>
      <div>
          <Nav/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/pokesearch' element={<Pokesearch/>}/>
              <Route path='/todolist' element={<Todolist/>}/>
            </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}
}
