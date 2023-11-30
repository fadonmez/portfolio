import Blog from '@/database/blog.model';
import { connectToDatabase } from '@/lib/mongoose';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    connectToDatabase();
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    revalidatePath('/api/blogs');
    revalidatePath('/blogs');
    return NextResponse.json(blogs);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
