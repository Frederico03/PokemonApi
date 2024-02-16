import { createColection } from "../controllers/createColectionController.js";
import { filter } from "../controllers/filterController.js"
import { deleteColection } from "../controllers/deleteColectionController.js";
import { createPokemon, readPokemon, updatePokemon, deletePokemon } from "../controllers/pokemonController.js";
import express from "express"

const routes = express.Router();

routes.post("/createColection", createColection)
routes.get("/filter", filter);
routes.delete("/deleteColection", deleteColection)

routes.get("/showPokemon/:query", readPokemon);
routes.put("/updatePokemon/:query", updatePokemon);
routes.post("/createPokemon", createPokemon);
routes.delete("/deletePokemon/:query", deletePokemon);

export default routes;

