import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface IProps {
  blog: {
    _id: string;
    title: string;
    description: string;
    createdAt: string;
  };
}

const BlogCard = ({ blog }: IProps) => {
  return (
    <Link
      href={`/blog/${blog._id}`}
      className='flex flex-col gap-4 p-4  rounded-md hover:bg-green-300/20  transition-colors cursor-pointer '
    >
      <h3 className='text-3xl font-semibold'>{blog.title}</h3>
      <p className=' line-clamp-1 w-24 text-zinc-800'>{blog.description}</p>
      <p className='text-sm text-zinc-600'> {formatDate(blog.createdAt)}</p>
    </Link>
  );
};

export default BlogCard;
