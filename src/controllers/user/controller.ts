import * as express from "express";
import * as jwt from "jsonwebtoken";
import configurations from "./../../../src/config/configuration";
import UserRepository from "./../../../src/repositories/user/UserRepository";

class UserController {
  public create(
    req: express.Request,
    res: express.Response,
    next: express.nextFunction,
  ) {
    const { email, password, name, state } = req.body;
    UserRepository.create({ email, password, name, state })
      .then((result) => {
        const { id } = result;
        jwt.sign(
          { email, id },
          configurations.secretKey,
          { algorithm: "HS256" },
          (err, token) => {
            res.send(token);
          },
        );
      })
      .catch((err) => {
        next(err);
        console.log("Email exists");
      });
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
    res.send(res.user);
  }

  public update(req: express.Request, res: express.Response) {
    res.send(req.body);
    res.send("Update Call");
  }
}
export default new UserController();
