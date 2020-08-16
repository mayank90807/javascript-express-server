import * as express from "express";
import { check, checkSchema, validationResult } from "express-validator/check";
import { validationController } from "../validationController";
import { authMiddleWareUser } from "./../../../libs/routes/authMiddleWare";

import schema from "./../schema";

export const result = validationResult;
import UserController from "./controller";

const userRouter = express.Router();
userRouter.post(
  "/",
  validationController(schema.create),
  UserController.create,
);
userRouter.delete(
  "/",
  validationController(schema.delete),
  UserController.delete,
);

userRouter.put("/", validationController(schema.update), UserController.update);
userRouter.get("/", authMiddleWareUser(), UserController.get);

export default userRouter;
