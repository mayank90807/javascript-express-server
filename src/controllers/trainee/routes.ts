import * as express from "express";
import { check, checkSchema, validationResult } from "express-validator/check";
import hasPermissions from "../../../extraTs/utils/permissions";
import { validationController } from "../validationController";
import { authMiddleWareTrainee } from "./../../../libs/routes/authMiddleWare";
import schema from "./../schema";

export const result = validationResult;
import TraineeController from "./controller";

const traineeRouter = express.Router();
traineeRouter.post(
  "/",
  authMiddleWareTrainee("getUsers", "write"),
  validationController(schema.create),
  TraineeController.create,
);
traineeRouter.delete(
  "/",
  authMiddleWareTrainee("getUsers", "delete"),
  validationController(schema.delete),
  TraineeController.delete,
);
traineeRouter.get(
  "/",
  authMiddleWareTrainee("getUsers", "read"),
  validationController(schema.get),
  TraineeController.get,
);
traineeRouter.put(
  "/",
  authMiddleWareTrainee("getUsers", "write"),
  validationController(schema.update),
  TraineeController.update,
);

export default traineeRouter;
