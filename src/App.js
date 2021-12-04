import React, { Component } from 'react';
import Ninjas from "./Ninjas";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header text-center bg-primary text-light py-2">
          <h1>Welcome to React</h1>
        </header>
        <main className="App-body py-2">
          <p className="start">Get Started!</p>
          <p>Welcome :)</p>
          <Ninjas name="Sud" age="20" belt="green" />
        </main>
        <footer className="App-footer bg-dark text-light py-5">
          <p className="text-center">&Copy; 2021 Featuriz</p>
        </footer>
      </div>
    );
  }
}

export default App;
