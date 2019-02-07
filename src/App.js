import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Form from './components/Form';

class App extends Component {
  state = {
    characters: [
      // {
      //   'name': 'Bambang',
      //   'pekerjaan': 'Mechanic'
      // },
      // {
      //   'name': 'Bharatheon',
      //   'pekerjaan': 'Petani'
      // },
      // {
      //   'name': 'Ramsey',
      //   'pekerjaan': 'Archer'
      // },
      // {
      //   'name': 'John Snow',
      //   'pekerjaan': 'Knight'
      // }
    ]
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
  }

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        < Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
