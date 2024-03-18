import React from 'react';
import BlogCard from './BlogCard';
import {getBlogs} from "@/lib/actions/blog.action";

const AdminBlog = async () => {
  const blogs: any = await getBlogs();

  return (
    <div className='grid grid-cols-1 w-full gap-6'>
      {blogs.map((blog: any) => (
        <BlogCard key={blog._id} blog={JSON.stringify(blog)} isAdmin />
      ))}
    </div>
  );
};

export default AdminBlog;
