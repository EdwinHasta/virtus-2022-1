import mongoose, { Schema, model, Model } from "mongoose";

// Interfaces
import { IUser } from "../interfaces";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: {
        values: ["admin", "teacher"],
        message: "Invalid role: {VALUE}",
        default: "teacher",
        required: true,
      },
      default: "teacher",
    },
  },
  {
    timestamps: true,
  }
);

const User: Model<IUser> = mongoose.models.User || model("User", userSchema);

export default User;
