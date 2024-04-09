import React from 'react';

import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import LoadMoreButton from './LoadMoreButton';
import { PokemonListItem } from '../services/pokeApi';
import router from 'next/router';

interface Props {
  initialPokemonList: PokemonListItem[];
  onLoadMore: () => void;
}


const Cards: React.FC<Props> = ({ initialPokemonList, onLoadMore }) => {
  const typeColors: { [key: string]: string } = {
    normal: 'bg-gray-400',
    fire: 'bg-red-500',
    water: 'bg-blue-500',
    electric: 'bg-yellow-400',
    grass: 'bg-green-500',
    ice: 'bg-blue-200',
    fighting: 'bg-red-700',
    poison: 'bg-purple-500',
    ground: 'bg-yellow-800',
    flying: 'bg-indigo-400',
    psychic: 'bg-purple-400',
    bug: 'bg-green-600',
    rock: 'bg-yellow-600',
    ghost: 'bg-indigo-700',
    dragon: 'bg-blue-600',
    dark: 'bg-gray-800',
    steel: 'bg-gray-500',
    fairy: 'bg-pink-400',
  };
  const handleCardClick = (pokemonId: number) => {
    router.push(`/pokemon/${pokemonId}`);
  };
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Pokémon</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {initialPokemonList.map((pokemon) => (
            <div key={pokemon.name} className="group relative cursor-pointer hover:opacity-75" // Apply hover effect and cursor pointer
            onClick={() => handleCardClick(pokemon.id)}>
          
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {pokemon.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">N°: {pokemon.id}</p>
                  <div className="flex">
                    {pokemon.types.map((type) => (
                      <span
                        key={type}
                        className={`mt-1 mr-1 px-2 py-1 text-xs font-medium text-white rounded ${typeColors[type]}`}
                      >
                        {type}
                      </span>
                    ))}
                  </div>         
                </div>
              </div>
            </div>
          ))}
        </div>
        <LoadMoreButton onClick={onLoadMore} isLoading={false} />
      </div>
    </div>
  );
};

export default Cards;