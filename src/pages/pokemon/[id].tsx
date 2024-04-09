import { useRouter } from 'next/router';
import React from 'react';
import PokemonDetails from '../../components/PokemonDetails';

const PokemonDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  if (typeof id !== 'string') {
    return <div>Loading...</div>;
  }

  return <PokemonDetails pokemonId={parseInt(id)} />;
};

export default PokemonDetailsPage;
