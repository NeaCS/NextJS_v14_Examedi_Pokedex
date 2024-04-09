
// pokeApi.ts
export interface PokemonListItem {
  id: number;
  name: string;
  types: string[];
  image: string;
}

export async function fetchAllPokemon(offset: number = 0, limit: number = 12): Promise<PokemonListItem[]> {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    const data = await response.json();
    const pokemonList: PokemonListItem[] = await Promise.all(
      data.results.map(async (pokemon: any) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();
        const formattedPokemon: PokemonListItem = {
          id: pokemonData.id,
          name: pokemonData.name,
          types: pokemonData.types.map((type: any) => type.type.name),
          image: pokemonData.sprites.front_default
        };
        return formattedPokemon;
      })
    );
    return pokemonList;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    throw error;
  }
 }
  export interface PokemonDetails {
    id: number;
    name: string;
    types: string[];
    abilities: string[];
    height: number; // Altura
    weight: number; // Peso
    category: string; // Categoría
    weaknesses: string[]; // Debilidades
    evolutions: string[]; // Evoluciones}
    image: string;

  }
  export async function fetchPokemonDetails(id: number): Promise<PokemonDetails> {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();

      const pokemonDetails: PokemonDetails = {
        id: data.id,
        name: data.name,
        types: data.types.map((type: any) => type.type.name),
        abilities: data.abilities?.map((ability: any) => ability.ability.name) || [], // Check for abilities existence before mapping
        height: data.height,
        weight: data.weight,
        category: data.species?.name, // Categoría
        weaknesses: [], // Asumiendo que se obtendrá de otra fuente
        evolutions: [], // Asumiendo que se obtendrá de otra fuente
        image: data.sprites.front_default

      };

      return pokemonDetails;
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
      throw error;
    }
  }