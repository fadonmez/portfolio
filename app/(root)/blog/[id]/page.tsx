import { MotionDiv } from '@/components/MotionDiv';
import { Skeleton } from '@/components/ui/skeleton';
import { getBlogById, getBlogs } from '@/lib/actions/blog.action';
import { formatDateDay } from '@/lib/utils';
import { ResolvingMetadata, Metadata } from 'next';
import React from 'react';

interface IBlog {
  blog: {
    _id: string;
    title: string;
    description: string;
    createdAt: string;
  };
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

export async function generateMetadata({ params }: any): Promise<Metadata> {
  // read route params
  const result: IBlog = await getBlogById({ id: params.id });

  return {
    title: result.blog.title,
    description: result.blog.description,
  };
}

export async function generateStaticParams() {
  const blogIds = await getBlogs({});
  return blogIds.blogs.map((blog: any) => {
    return { id: blog._id.toString() };
  });
}

const page = async ({ params }: any) => {
  const result: IBlog = await getBlogById({ id: params.id });
  const blogs = result.blog;

  return (
    <MotionDiv variants={item} className='pt-10 bg-zinc-100 flex-1'>
      <div className='container flex flex-col gap-4'>
        <div className='flex flex-col gap-1 mb-6 '>
          <h1 className='text-4xl font-semibold'>{blogs.title}</h1>
          <p className='text-sm text-zinc-600'>
            {formatDateDay(blogs.createdAt)}
          </p>
        </div>
        <p className='text-zinc-800'>{blogs.description}</p>
      </div>
    </MotionDiv>
  );
};

export default page;
