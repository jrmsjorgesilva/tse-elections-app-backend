import express, { Response, Request, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { usersRouter } from "../routes/public/users.route.js";
import { db } from "../config/database/mongo.database.js";
import {
  fetchPokemonData,
  fetchRickAndMortyData,
  fetchTranslationData,
} from "../config/api/index.js";

// server
dotenv.config();
const port = process.env.PORT;
const server = express();

// middlewares
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

// public routes
server.use("/", usersRouter);

// private routes
server.use("/private", (req: Request, res: Response) => {
  res.send("Esta é uma rota privada! Saia imediatamente!");
});

// listen server
server.listen(port, () => {
  db();
  fetchPokemonData();
  fetchRickAndMortyData();
  fetchTranslationData();
  console.log(`Servidor rodando na porta ${port}`);
});
