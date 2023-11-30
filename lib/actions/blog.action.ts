'use server';

import Blog from '@/database/blog.model';
import { connectToDatabase } from '../mongoose';
import { revalidatePath } from 'next/cache';

export async function createBlog(params: any) {
  try {
    const { title, description } = params;
    await connectToDatabase();
    await Blog.create({ title, description });
    console.log('blog created');
    revalidatePath('/blog');
    return { message: 'Blog created succesfully' };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getBlogs(params: any) {
  try {
    connectToDatabase();
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return { blogs };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getBlogById({ id }: any) {
  try {
    connectToDatabase();
    const blog = await Blog.findById({ _id: id });
    revalidatePath('/blog');
    return { blog };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteBlog({ id }: any) {
  try {
    connectToDatabase();
    await Blog.findByIdAndDelete({ _id: id });
    revalidatePath('/blog');
    return { message: 'Blog deleted successfully' };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
