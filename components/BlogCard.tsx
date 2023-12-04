'use client';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { deleteBlog } from '@/lib/actions/blog.action';
import { useToast } from './ui/use-toast';
import { MotionDiv } from './MotionDiv';

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

const item = {
  hidden: { opacity: 0, translateY: 20 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const BlogCard = ({ blog, isAdmin }: IProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const objBlogs: Blog = JSON.parse(blog);
  const { toast } = useToast();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      await deleteBlog({ id: objBlogs._id });
      toast({
        title: 'Success',
        description: 'Blog deleted successfully',
      });
    } catch (error) {
      toast({
        title: 'Error',
        variant: 'destructive',
        description: 'An error occurped while deleting!',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <MotionDiv variants={item}>
        <Link
          href={`/blog/${objBlogs._id}`}
          className='flex flex-col gap-4 p-4  rounded-md lg:hover:bg-green-300/20  transition-colors cursor-pointer '
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
      </MotionDiv>
      {isAdmin && (
        <form onSubmit={handleSubmit}>
          <Button
            disabled={isSubmitting}
            className=' disabled:bg-slate-500'
            type='submit'
          >
            {isSubmitting ? 'Deleting...' : 'Delete'}
          </Button>
        </form>
      )}
    </>
  );
};

export default BlogCard;
