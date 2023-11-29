import Blog from '@/database/blog.model';
import { connectToDatabase } from '@/lib/mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    connectToDatabase();
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return NextResponse.json(blogs);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
