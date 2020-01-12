import React from 'react';
import '../stylesheets/App.scss';
import data from '../data/data.json';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: data
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="page__title">Mi lista de Pokemons</h1>
        <PokeList items={this.state.pokemons}/>
      </div>
    );
  }
}

export default App;
