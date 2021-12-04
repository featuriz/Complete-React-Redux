import React, { Component } from 'react';
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: 'Sudhakar', age: 33, belt: 'green', id: 1 },
      { name: 'Nithu', age: 18, belt: 'red', id: 2 },
      { name: 'Lisu', age: 25, belt: 'blue', id: 3 }
    ]
  }

  addNinja = (ninja) => {
    // console.log(ninja)
    ninja.id = Math.random();
    // copy of old array + add new
    let ninjasx = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjasx
    })
  }
  deleteNinja = (id) => {
    // console.log(id)
    let ninjay = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjay
    })
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
          <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
          <AddNinja addNinja={this.addNinja} />
        </main>
        <footer className="App-footer bg-dark text-light py-5">
          <p className="text-center">&copy; 2021 Featuriz</p>
        </footer>
      </div>
    );
  }
}

export default App;
