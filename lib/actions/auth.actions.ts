'use server';
import { signIn } from '@/auth';
import { connectToDatabase } from '../mongoose';
import bcrypt from 'bcrypt';
import User from '@/database/user.model';

export const authenticate = async (formData: FormData) => {
  try {
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return { error: 'wrong credentials' };
    }
    throw error;
  }
};

export async function createUser(params: any) {
  try {
    const { email, password } = params;
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectToDatabase();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return existingUser.email;
    }
    await User.create({ email, password: hashedPassword });
    console.log('user created');
  } catch (error) {
    console.log(error);
    throw error;
  }
}
