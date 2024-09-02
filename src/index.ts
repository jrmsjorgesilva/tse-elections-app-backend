import express, { Response, Request, NextFunction } from "express";
import dotenv from "dotenv";
import { usersRouter } from "../routes/public/users.route.js";
import { db } from "../config/database/mongo.database.js";
import { middlewaresFunc } from "../middlewares/index.js";
import { vipRouter } from "../routes/private/vip.route.js";

// server
dotenv.config();
const port = process.env.PORT;
const server = express();

// middlewares
middlewaresFunc(server);

// public routes
server.use("/", usersRouter);

// private routes
server.use("/", vipRouter);

// listen server
server.listen(port, () => {
  db();
  console.log(`Servidor rodando na porta ${port}`);
});
