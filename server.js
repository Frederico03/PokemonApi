import express from "express";
import cors from 'cors';
import dbConnection from './src/db/dbConnect.js'
import pokemonRouter from "./src/routes/pokemonRoutes.js"

const app = express()

import dotenv from 'dotenv';
dotenv.config();

app.use(cors())
app.use(express.json())
app.use("/api", pokemonRouter)

dbConnection()
  .then(() => {
    const server = app.listen(process.env.PORT, () => { 
      console.log(`Server Started on Port ${ process.env.PORT }`)
    })  
  })