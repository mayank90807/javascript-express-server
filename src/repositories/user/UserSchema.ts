import * as mongoose from "mongoose";

const Schema = mongoose.Schema;
const schema = new Schema({
  _id: mongoose.Types.ObjectId,
  createdAt: {type: Date, default: Date.now},
  email: { type : String , unique : true, required : true },
  name: String,
  password: String,
  state: String,
});

export default schema;
