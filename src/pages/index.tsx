// use client
import type { GetStaticProps } from 'next';
import Cards from '@/components/Cards';
import { fetchAllPokemon } from '../services/pokeApi'; // Importa la función del servicio

export default function Home({ pokemonList }: { pokemonList: any[] }) {
  return (
    <div>
      <h1>Pokedex</h1>
      <section>
        <Cards pokemonList={pokemonList} /> {/* Actualiza la estructura */}
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pokemonList = await fetchAllPokemon();

  return {
    props: {
      pokemonList,
    },
  };
};
