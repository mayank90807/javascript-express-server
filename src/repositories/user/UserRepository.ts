import * as mongoose from "mongoose";
import { IUserModel } from "./IUserModel";
import UserModel from "./UserModel";

class UserRepository {
  public create(data) {
    console.log("in create");
    const id =  mongoose.Types.ObjectId();
    const model = new UserModel({
      _id: id,
      ...data,
    });
    return model.save();
  }
  public count(query= {}): any {
    return UserModel.countDocuments(query);
  }
  public getUser(data = {}) {
    return UserModel.findOne().where(data).select("-password");
  }
}
export default new UserRepository();
