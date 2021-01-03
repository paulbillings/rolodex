import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
     characters: [
       {
         name: 'Frankenstein',
         id: 'c1a1'
       },
       {
        name:  'Dracula',
        id: 'd2a1'
      },
      {
        name: 'Zombie',
        id: 'e3a1'
      },
     ]
    };
  }
  
  render() {
    return (
      <div className="App">
        {
          this.state.characters.map(character => (
            <h1 key={character.id}> {character.name} </h1>)
          )
        }
      </div>
    );
  }
}

export default App;
