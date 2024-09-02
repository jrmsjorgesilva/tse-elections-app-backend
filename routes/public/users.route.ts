import express, { Response, Request, NextFunction } from "express";
import {
  addUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../../controllers/users.controller/index.js";

export const usersRouter = express.Router();

usersRouter
  .all("/$", (req: Request, res: Response) => {
    res.send("TSE Elections App Server");
  })
  .get("/users", getUsers)
  .post("users", addUser)
  .get("/users/:user_id", getUserById)
  .put("/users/:user_id", updateUser)
  .delete("/users/:user_id", deleteUser);
