import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      random: ["Drumsticks", "Football", "Cymbals", "Drums", "Hoodie"]
    };
  }

  render() {
    let displayRandomStuff = this.state.random.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return <div className="App">{displayRandomStuff}</div>;
  }
}

export default App;