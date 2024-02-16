import Pokemon from "../models/pokemonModel.js";
import { xlsConvertToJson } from "../util/readExcelUtils.js";
import { createPokemonData } from "../util/pokemonUtils.js";

export const createColection = async (req, res) => {
    try {
        // Verifica se já existem dados importados no banco de dados
        const checkData = await Pokemon.find();
        if (checkData.length !== 0) {
            return res.status(401).json({
                error: "Os dados já foram importados no banco de dados",
            });
        }

        // Importa os dados do arquivo Excel para o banco de dados
        const plan = xlsConvertToJson();
        for (const item of plan) {
            // Mapeamento de chaves e conversão de tipos
            const pokemonData = createPokemonData(item)
            const pokemon = new Pokemon(pokemonData);
            await pokemon.save();
        }
        return res.json(plan);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
