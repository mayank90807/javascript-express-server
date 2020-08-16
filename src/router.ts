import * as express from "express";
import traineeRouter from "./controllers/trainee/routes";
import userRouter from "./controllers/user/routes";

const router = express.Router();
router.use("/trainee", traineeRouter);
router.use("/user", userRouter);

export default router;
