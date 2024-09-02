import express, { Request, Response } from "express";

export const vipRouter = express.Router();

vipRouter
  .get("/private", (req: Request, res: Response) =>
    res.send("This is a private route! Get out immediatly!!!")
  )
  .get("/vip", (req: Request, res: Response) =>
    res.send("This is a vip route")
  );
