import React from 'react';
import BlogCard from './BlogCard';
import { getData } from '@/app/(root)/blog/page';

const AdminBlog = async () => {
  const blogs: any = await getData();

  return (
    <div className='grid grid-cols-1 w-full gap-6'>
      {blogs.map((blog: any) => (
        <BlogCard key={blog._id} blog={JSON.stringify(blog)} isAdmin />
      ))}
    </div>
  );
};

export default AdminBlog;
