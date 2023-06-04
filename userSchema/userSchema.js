import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  userName: String,
  email: String,
  mobile: String,
});

const user = mongoose.model("user", userSchema);
export default user;
