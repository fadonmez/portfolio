import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { deleteBlog } from '@/lib/actions/blog.action';

interface IProps {
  blog: string;
  isAdmin?: boolean;
}
interface Blog {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
}

const BlogCard = ({ blog, isAdmin }: IProps) => {
  const objBlogs: Blog = JSON.parse(blog);
  return (
    <>
      <Link
        href={`/blog/${objBlogs._id}`}
        className='flex flex-col gap-4 p-4  rounded-md hover:bg-green-300/20  transition-colors cursor-pointer '
      >
        <h3 className='text-3xl font-semibold'>{objBlogs.title}</h3>
        <p className=' line-clamp-1 w-24 text-zinc-800'>
          {objBlogs.description}
        </p>
        <p className='text-sm text-zinc-600'>
          {' '}
          {formatDate(objBlogs.createdAt)}
        </p>
      </Link>
      {isAdmin && (
        <form
          action={async () => {
            'use server';
            const res = await deleteBlog({ id: objBlogs._id });
            console.log(res);
          }}
        >
          <Button type='submit'>Delete Blog</Button>
        </form>
      )}
    </>
  );
};

export default BlogCard;
