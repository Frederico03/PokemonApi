import Pokemon from "../models/pokemonModel.js";

export const deleteColection = async(req, res) => {
  try {
    // Elimina a coleção de Pokémon
    await Pokemon.collection.drop();
    res.status(200).send("A coleção de Pokémon foi eliminada com sucesso.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao eliminar a coleção de Pokémon.");
  }
}