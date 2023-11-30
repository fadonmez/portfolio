import Blog from '@/database/blog.model';
import { connectToDatabase } from '@/lib/mongoose';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // Query parametrelerine erişim
  const { searchParams } = new URL(req.url);
  const token = searchParams.get('secret');
  if (token !== process.env.API_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
  try {
    connectToDatabase();
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    revalidatePath('/api/blogs');
    revalidatePath('/blog');
    return NextResponse.json(blogs);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
