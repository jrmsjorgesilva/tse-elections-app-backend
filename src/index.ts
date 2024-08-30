import express, { Response, Request, NextFunction } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { usersRouter } from "../routes/public/users.route";

// server
dotenv.config();
const port = process.env.PORT;
const server = express();

// middlewares
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

// public routes
server.use("/$", usersRouter);

// private routes
server.use("/private", (req: Request, res: Response) => {
  res.send("Esta é uma rota privada! Saia imediatamente!");
});

// listen server
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
