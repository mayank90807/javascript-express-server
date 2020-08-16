import { Document } from "mongoose";
export interface IUserModel extends Document {
  name: string;
  email: string;
  password?: string;
  state?: string;
}
