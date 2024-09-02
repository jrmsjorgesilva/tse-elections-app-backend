import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDatabaseURI = `mongodb+srv://${process.env.MONGO_DATABASE_USER}:${process.env.MONGO_DATABASE_PASS}@restapiboilerplateclust.5vrtx.mongodb.net/?retryWrites=true&w=majority&appName=RestAPIBoilerplateCluster`;

export const db = async () => {
  try {
    await mongoose.connect(mongoDatabaseURI);
    console.log("Conectado com sucesso!");
  } catch (err) {
    console.error(err);
    console.log("Houve um erro na conexão com o banco de dados!");
  }
};
