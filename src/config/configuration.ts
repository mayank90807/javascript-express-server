import { config } from "dotenv";
import { IConfig } from "./IConfig";

config();

const configurations: IConfig = {
  mongoUrl: process.env.MONGO_URL,
  nodeENV: process.env.NODE_ENV,
  port: Number(process.env.PORT),
  secretKey: process.env.SECRET_KEY,
};

Object.freeze(configurations);
export default configurations;
