import { User } from "../../models/users.model";
import express, { Response, Request, NextFunction } from "express";

// @GET requisition
export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await User.find();
    return res
      .status(201)
      .json({ msg: `Dados de usuários buscados com sucesso: `, result });
  } catch (err) {
    console.error(err);
    console.log("Não foi possível recuperar usuários devido a erro");
  }
};

// @POST requisition
export const addUser = async (req: Request, res: Response) => {
  try {
    // todo
  } catch (err) {
    console.error(err);
    console.log("Não foi possível completar a requisição devido a um erro");
  }
};

// @GET requisition by ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    // todo
  } catch (err) {
    console.error(err);
    console.log("Não foi possível completar a requisição devido a um erro");
  }
};

// @PUT requisition by ID
export const updateUser = async (req: Request, res: Response) => {
  try {
    // todo
  } catch (err) {
    console.error(err);
    console.log("Não foi possível completar a requisição devido a um erro");
  }
};

// @DELETE requisition by ID
export const deleteUser = async (req: Request, res: Response) => {
  try {
    // todo
  } catch (err) {
    console.error(err);
    console.log("Não foi possível completar a requisição devido a um erro");
  }
};
