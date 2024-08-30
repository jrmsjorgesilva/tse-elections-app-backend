import mongoose, { Schema } from "mongoose";

interface IUser {
  username: String;
  email: String;
}

const userSchema = new Schema({
  username: String,
  email: String,
});

export const User = mongoose.model<IUser>("TseElectionAppUser", userSchema);
