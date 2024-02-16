import Pokemon from "../models/pokemonModel.js";
import { filterPokemons } from '../util/filterUtils.js';

export const filter = async(req, res) => {
  try {
    const { query, page, limit } = await filterPokemons(req.query);
    const pokemons = await Pokemon.find(query)
        .sort({ name: 1 }) // Ordena por nome em ordem crescente
        .limit(limit)
        .skip((page - 1) * limit);

    return res.json(pokemons);
  } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
  } 
}