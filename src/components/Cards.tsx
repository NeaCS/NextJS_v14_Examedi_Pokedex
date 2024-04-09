import React from 'react';

interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

interface Props {
  pokemonList: Pokemon[];
}

const Cards: React.FC<Props> = ({ pokemonList }) => {
  // Verificar si pokemonList es null o undefined
  if (!pokemonList || pokemonList.length === 0) {
    return <div className="text-center">No hay Pokémon disponibles.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {pokemonList.map((pokemon) => (
        <div key={pokemon.name} className="bg-white rounded-lg overflow-hidden shadow-md">
          <img className="w-full h-48 object-cover object-center" src={pokemon.image} alt={pokemon.name} />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{pokemon.name}</h3>
            <p className="text-sm text-gray-600">ID: {pokemon.id}</p>
            <p className="text-sm text-gray-600">Tipo: {pokemon.types.join(', ')}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
