import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

export const middlewaresFunc = async (server: any) => {
  server.use(express.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(cors());
};
