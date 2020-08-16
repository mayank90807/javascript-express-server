import * as mongoose from "mongoose";
import { IUserModel } from "./IUserModel";
import {default as UserSchema} from "./UserSchema";

export default mongoose.model<IUserModel>("User", UserSchema);
