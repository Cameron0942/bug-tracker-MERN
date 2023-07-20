import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

const userSchema = new Schema({
  email: {
    type: String,
    default: null,
    required: false,
    unique: true,
  },
  password: {
    type: String,
    default: null,
    required: false,
    minLength: 4,
  },
  role: {
    type: String,
    default: null,
  },
  FPVerificationCode: {
    type: String,
    default: null,
  },
});

const user = model("users", userSchema);
export default user;