import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
     characters: []
    };
  }

  // const [celebrities, setCelebs] = useState([]);

  // const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY;

  // const celebrityPeople = async () => {
  //   const response = await fetch(url, {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-key": API_KEY,
  //       "x-rapidapi-host": "celebrity-bucks.p.rapidapi.com",
  //     },
  //   });
  //   const celebrities = await response.json();
  //   setCelebs(celebrities.Birthdays);
  // };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ characters: users }))
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
