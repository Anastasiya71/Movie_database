import React, { Component } from 'react'
import '../static/App.css'
import Movies from './Movies/Movies'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title">Service for watching movies
          </div>
        </header>
        <Movies />
      </div>
    )
  }
}
export default App
