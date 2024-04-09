import React, { useEffect, useState } from 'react';
import { fetchPokemonDetails } from '../services/pokeApi';
import type { PokemonDetails } from '../services/pokeApi';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import Link from 'next/link';



interface Props {
    pokemonId: number;
}

const PokemonDetails: React.FC<Props> = ({ pokemonId }) => {
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const details = await fetchPokemonDetails(pokemonId);
                setPokemonDetails(details);
                console.log(details)

            } catch (error) {
                console.error('Error fetching Pokemon details:', error);
            }
        };

        fetchData();
    }, [pokemonId]);

    if (!pokemonDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
          <Link href="/" className="menu-link text-sm font-medium text-gray-700 hover:text-blue-500">
              volver
            </Link>
            <h2 className="text-2xl font-bold">{pokemonDetails.name}</h2>
            <p className="text-gray-600">ID: {pokemonDetails.id}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {pokemonDetails.types.map((type, index) => (
              <span
                key={index}
                className={`px-2 py-1 rounded-full text-white text-xs font-medium bg-${type}`}
              >
                {type}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-600 font-bold">Abilities:</p>
            <ul className="list-disc pl-4">
              {pokemonDetails.abilities.map((ability, index) => (
                <li key={index} className="text-gray-700">
                  {ability}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-600 font-bold">Stats:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p className="text-gray-700">Height: {pokemonDetails.height}m</p>
              <p className="text-gray-700">Weight: {pokemonDetails.weight}kg</p>
              <p className="text-gray-700">Category: {pokemonDetails.category}</p>
              {/* Add weaknesses and evolutions if available */}
              {pokemonDetails.weaknesses.length > 0 && (
                <p className="text-gray-700">Weaknesses: {pokemonDetails.weaknesses.join(', ')}</p>
              )}
              {pokemonDetails.evolutions.length > 0 && (
                <p className="text-gray-700">Evolutions: {pokemonDetails.evolutions.join(', ')}</p>
              )}
            </div>
          </div>
          <img src={pokemonDetails.image} alt={pokemonDetails.name} className="w-full h-auto object-cover rounded-lg" />
        </div>
      );
    };
export default PokemonDetails;
