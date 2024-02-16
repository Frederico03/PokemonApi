import mongoose from 'mongoose';

const dbConnection = async () => {
  mongoose.connect(process.env.MONGO_URL)
  .then(async()=>{
    console.log("Connection Succesfull")
    const collections = await mongoose.connection.db.listCollections().toArray();
    const collectionExists = collections.some(collection => collection.name === 'pokemons');
    
    if (!collectionExists) {
      // Cria a coleção pokemons se ela não existir
      await mongoose.connection.createCollection('pokemons');
      console.log('Coleção pokemons criada com sucesso');
    } else {
      console.log('A coleção pokemons já existe');
    }
  })
  .catch((err) => { 
    console.log("DB Error:" , err.message)
  });
}
  export default dbConnection;