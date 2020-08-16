import * as express from "express";
import * as jwt from "jsonwebtoken";
import configurations from "./../../../src/config/configuration";
import UserRepository from "./../../../src/repositories/user/UserRepository";

class TraineeController {
  public create(
    req: express.Request,
    res: express.Response,
    next: express.nextFunction,
  ) {
   res.send("Create call --> Trainee");
  }

  public delete(
    req: express.Request,
    res: express.Response,
    next: express.nextFunction,
  ) {
    res.send(req.body);
    console.log("User deleted");
  }

  public get(req: express.Request, res: express.Response) {
    const {email, password} = req.body;
    res.send(req.body);
  }

  public update(req: express.Request, res: express.Response) {
    res.send(req.body);
    res.send("Update Call");
  }
}
export default new TraineeController();
