import mongoose from "mongoose"

const pokemonSchema = new mongoose.Schema({
    name:{
      type: String, 
      required: true
    },
    pokedexNumber:{
      type: Number,
      required: true
    },
    imgName:{
      type: Number,
    },
    generation:{
      type: String,
    },
    evolutionStage:{
      type: String,
    },
    evolved:{
      type: String,
    },
    famili_ID:{
      type: String,
    },
    croosGen:{
      type: String,
    },
    type_1:{
      type: String,
      required: true
    },
    type_2:{
      type: String,
    },
    wether_1:{
      type: String,
    },
    wether_2:{
      type: String,
    },
    stat_total:{
      type: String,
    },
    atk:{
      type: String,
    },
    def:{
      type: String,
    },
    sta:{
      type: String,
    },
    legendary:{
      type: String,
    },
    aquireable:{
      type: String,
    },
    spawns:{
      type: String,
    },
    regional:{
      type: String,
    },
    raidable:{
      type: String,
    },
    hatchable:{
      type: String,
    },
    shiny:{
      type: String,
    },
    nest:{
      type: String,
    },
    new:{
      type: String,
    },
    not_gettable:{
      type: String,
    },
    future_evolve:{
      type: String,
    },
    '100%_cp_@40':{
      type: String,
    },
    '100%_cp_@39':{
      type: String,
    },
});
const Pokemon = mongoose.model("Pokemon", pokemonSchema);
export default Pokemon;