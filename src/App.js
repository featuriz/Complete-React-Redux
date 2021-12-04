import React, { Component } from 'react';
import Ninjas from "./Ninjas";

class App extends Component {
  state = {
    ninjas: [
      { name: 'Sudhakar', age: 33, belt: 'green', id: 1 },
      { name: 'Nithu', age: 18, belt: 'red', id: 2 },
      { name: 'Lisu', age: 25, belt: 'blue', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header text-center bg-primary text-light py-2">
          <h1>Welcome to React</h1>
        </header>
        <main className="App-body py-2">
          <p className="start">Get Started!</p>
          <p>Welcome :)</p>
          <Ninjas ninjas={this.state.ninjas} />
        </main>
        <footer className="App-footer bg-dark text-light py-5">
          <p className="text-center">&copy; 2021 Featuriz</p>
        </footer>
      </div>
    );
  }
}

export default App;
