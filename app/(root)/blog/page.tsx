import BlogCard from '@/components/BlogCard';
import { MotionDiv } from '@/components/MotionDiv';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'My blogs',
};

interface Blog {
  _id: string; // Assuming ObjectId is represented as a string
  title: string;
  description: string;
}

interface BlogData {
  blogs: Blog[];
}
const container = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export const getData = async () => {
  const result = await fetch(
    `${process.env.API_URL}/api/blogs?secret=${process.env.API_SECRET}`
  );
  const data = await result.json();
  return data;
};

const Blog = async () => {
  const blogs = await getData();

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}
      className='container flex flex-col justify-start py-6 lg:py-24  items-center gap-6 flex-1 w-full'
    >
      <h2 className='text-5xl font-bold text-center '>My Blog</h2>
      <p className='text-center text-md text-zinc-600'>
        Welcome to my blog, where I share my thoughts and experiences with.
      </p>
      <MotionDiv
        variants={container}
        initial='hidden'
        animate='visible'
        className='grid grid-cols-1 w-full   gap-6 '
      >
        {blogs.length ? (
          blogs.map((blog: any) => (
            <BlogCard key={blog._id} blog={JSON.stringify(blog)} />
          ))
        ) : (
          <h2>No Blog</h2>
        )}
      </MotionDiv>
    </MotionDiv>
  );
};

export default Blog;
