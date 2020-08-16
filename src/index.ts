
import Database, * as database from "../libs/database";
import { default as configurations } from "./config/configuration";
import {default as  Server} from "./Server";
const server = new Server(configurations);
server.bootstrap();
server.run();
