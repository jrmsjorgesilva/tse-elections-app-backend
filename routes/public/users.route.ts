import express, { Response, Request, NextFunction } from "express";
import {
  addUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../../controllers/users.controller/index.js";
import {
  addZona,
  deleteZona,
  getZonaById,
  getZonas,
  patchZona,
  updateZona,
} from "../../controllers/zona.controller/index.js";

export const usersRouter = express.Router();

usersRouter
  .all("/$", (req: Request, res: Response) => {
    res.send("TSE Elections App Server");
  })
  // users route
  .get("/users", getUsers)
  .post("users", addUser)
  .get("/users/:user_id", getUserById)
  .put("/users/:user_id", updateUser)
  .delete("/users/:user_id", deleteUser)
  // zonas eleitorais route
  .get("/zonas", getZonas)
  .post("/zonas", addZona)
  .get("/zonas/:zona_id", getZonaById)
  .put("/zonas/:zona_id", updateZona)
  .patch("/zonas/:zona_id", patchZona)
  .delete("/zonas/:zona_id", deleteZona);
