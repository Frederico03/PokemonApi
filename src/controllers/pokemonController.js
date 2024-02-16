import Pokemon from "../models/pokemonModel.js";
import { createPokemonData } from "../util/pokemonUtils.js";

export const readPokemon = async (req, res) => {
  const query = req.params.query;
  const filter = isNaN(query) ? { name: query} : { pokedexNumber: parseInt(query)}
  try{
    const pokemon = await Pokemon.findOne(filter);
    if(!pokemon){
      return res.status(404).json({message: 'Pokémon não encontrado'});
    }
    return res.json(pokemon)
  }catch(err){
    res.status(500).json({ message: err.message });
  }
}

export const updatePokemon = async (req, res) => {
  try {
    const query = req.params.query;
    const filter = isNaN(query) ? { name: query } : { pokedexNumber: parseInt(query) };
    const { updatedAttribute, updatedValue } = req.body;

    const updatedPokemon = await Pokemon.findOneAndUpdate(
      filter,
      { [updatedAttribute]: updatedValue },
      { new: true }
    );

    if (!updatedPokemon) {
      return res.status(404).json({ error: 'Pokémon não encontrado' });
    }

    return res.json(updatedPokemon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const createPokemon = async(req, res) => {
  try{
    const maxPokedexNumber = await Pokemon.findOne()
      .sort("-pokedexNumber")
      .select("pokedexNumber")

    const newPokedexNumber = maxPokedexNumber ? parseInt(maxPokedexNumber.pokedexNumber) + 1 : 1

    const modelFields = Object.keys(Pokemon.schema.paths);
    const newData = { ...req.body };

    const pokemonData = createPokemonData(newData)

    modelFields.forEach(field => {
      if (!(field in pokemonData)) {
        pokemonData[field] = null;
      }
    });

    const newPokemonData = {
      ...pokemonData,
      pokedexNumber: newPokedexNumber
    }

    const newPokemon = new Pokemon(newPokemonData)
    newPokemon.save()

    return res.json(newPokemon)
  }catch(err){
    console.error(err);
    res.status(500).send("Erro ao inserir o Pokémon no banco de dados.");
  }
}

export const deletePokemon = async(req, res) => {
  try {
    const query = req.params.query;
    const filter = isNaN(query) ? { name: query } : { pokedexNumber: parseInt(query) };
    const deletedPokemon  = await Pokemon.findOneAndDelete(filter) 
    if (!deletedPokemon) {
      return res.status(404).json({ error: 'Pokémon não encontrado' });
    }

    return res.json({ message: 'Pokémon removido com sucesso' });
  } catch (error) {
    
  }
}




















