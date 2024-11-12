import React, { Component } from 'react';

// Définition du type de l'état
interface CounterState {
  count: number;  // L'état count est un nombre
}

class Counter extends Component<{}, CounterState> {
  // Définition de l'état initial
  state: CounterState = {
    count: 0,  // Le compteur commence à 0
  };

  // Méthode pour incrémenter le compteur
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Méthode render pour afficher le compteur et le bouton
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
