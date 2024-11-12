import React from 'react';

// Définition du type des props du composant
interface GreetingProps {
  name: string;  // La propriété name est une chaîne de caractères
}

// Composant fonctionnel avec typage explicite des props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Bonjour, {name} !</div>;
};

export default Greeting;
