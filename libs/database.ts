import * as mongoose from "mongoose";
import seedData from "./seedData";

export default class Database {
  public static open({ mongoUrl }) {
    return new Promise((resolve, reject) => {
      const options = {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
      };
      mongoose.connect(mongoUrl, options);
      mongoose.connection.on("connected", (ref) => {
        console.log("Connected to mongo server.");
        seedData();
        resolve("connected");
      });
      mongoose.connection.on("error", (err) => {
        console.log("Could not connect to mongo server!");
        reject(err);
        return console.log(err);
      });
    });
  }
  public close() {
    mongoose.disconnect();
  }
}
