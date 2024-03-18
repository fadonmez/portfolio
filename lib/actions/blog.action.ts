'use server';

import Blog from '@/database/blog.model';
import { connectToDatabase } from '../mongoose';
import { revalidatePath } from 'next/cache';
import mongoose from 'mongoose';

export async function createBlog(params: any) {
  try {
    const { title, description } = params;
    await connectToDatabase();
    await Blog.create({ title, description });
    console.log('blog created');
    revalidatePath('/blog');
    revalidatePath('/admin');
    return { message: 'Blog created succesfully' };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getBlogs() {
  try {
    await connectToDatabase();
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return blogs;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getBlogById({ id }: any) {
  if (mongoose.Types.ObjectId.isValid(id)) {
    try {
      await connectToDatabase();
      const blog = await Blog.findById({ _id: id });
      if (!blog) return { blog: null };
      return { blog };
    } catch (error) {
      console.log(error);
      throw error;
    }
  } else {
    return { message: 'invalid id' };
  }
}

export async function deleteBlog({ id }: any) {
  try {
    await connectToDatabase();
    await Blog.findByIdAndDelete({ _id: id });
    revalidatePath('/blog');
    revalidatePath('/admin');
    console.log('blog deleted');
  } catch (error) {
    console.log(error);
    throw error;
  }
}
