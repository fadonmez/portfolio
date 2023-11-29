import { Schema, models, model, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  isAdmin: boolean;
}

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = models.User || model('User', UserSchema);

export default User;
