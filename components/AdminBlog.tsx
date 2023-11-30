import { getBlogs } from '@/lib/actions/blog.action';
import React from 'react';
import BlogCard from './BlogCard';

const AdminBlog = async () => {
  const blogs: any = await getBlogs({});
  const stringBlogs = JSON.stringify(blogs.blogs);

  return (
    <div className='grid grid-cols-1 w-full gap-6'>
      {blogs.blogs.map((blog: any) => (
        <BlogCard key={blog._id} blog={JSON.stringify(blog)} isAdmin />
      ))}
    </div>
  );
};

export default AdminBlog;
