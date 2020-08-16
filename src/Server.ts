import * as bodyParser from "body-parser";
import * as express from "express";
import { default as errorHandler } from "../libs/routes/errorHandler";
import Database from "./../libs/database";
import { default as notFound } from "./../libs/routes/notFoundRoute";
import configurations from "./config/configuration";
import { IConfig } from "./config/IConfig";
import { default as router } from "./router";

export default class Server {
  private app: express.Express;
  constructor(private config: IConfig) {
    this.config = config;
    this.app = express();
  }
  public initBodyParser() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  }
  public bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }
  public setupRoutes() {
    this.app.use("/api", router);
    this.app.post("/hello", (req, res) => {
      res.json(req.body);
    });
    this.app.get("/health-check", (req, res, next) => {
      throw new Error();
    });
    this.app.use(notFound);
    this.app.use(errorHandler);
  }
  public run() {
    Database.open({ mongoUrl: configurations.mongoUrl })
      .then(() => {
        this.app.listen(this.config.port, () =>
          console.log(`Example app listening on port ${this.config.port}!`),
        );
      })
      .catch((err) => {
        console.log("error found --> ", err);
      });
  }
}
