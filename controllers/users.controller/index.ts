import { User } from "../../models/users.model.js";
import { Response, Request, NextFunction } from "express";

// @GET requisition
export const getUsers = async (_: Request, res: Response) => {
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
    const newUser = req.body;
    const result = await User.create(newUser);
    return res
      .status(200)
      .json({ msg: `Usuário criado com sucesso: `, result });
  } catch (err) {
    console.error(err);
    console.log("Não foi possível completar a requisição devido a um erro");
  }
};

// @GET requisition by ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;
    const result = await User.findById(user_id);
    return res
      .status(200)
      .json({ msg: `Usuário encontrado com sucesso: `, result });
  } catch (err) {
    console.error(err);
    console.log("Não foi possível completar a requisição devido a um erro");
  }
};

// @PUT requisition by ID
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;
    const newUser = req.body;
    const result = await User.findByIdAndUpdate(user_id, newUser);
    return res
      .status(201)
      .json({ msg: `Usuário atualizado com sucesso: `, result });
  } catch (err) {
    console.error(err);
    console.log("Não foi possível completar a requisição devido a um erro");
  }
};

// @DELETE requisition by ID
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;
    const result = await User.findByIdAndDelete(user_id);
    return res
      .status(201)
      .json({ msg: `Usuário deletado com sucesso: `, result });
  } catch (err) {
    console.error(err);
    console.log("Não foi possível completar a requisição devido a um erro");
  }
};
