import React, { Component } from "react";
import { CardList } from './components/card-list/card-list.component';

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
     characters: [],
     searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ characters: users }))
  }
  
  render() {
    const { characters, searchField } = this.state;
    const filteredCharacters = characters.filter(characters =>
      characters.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <input 
          type='search' 
          placeholder='search people' 
          onChange={e => this.setState({ searchField: e.target.value })} 
        />
        <CardList characters={filteredCharacters} />
      </div>
    );
  }
}

export default App;
