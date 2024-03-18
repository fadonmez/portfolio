import { MotionDiv } from '@/components/MotionDiv';
import { getBlogById, getBlogs } from '@/lib/actions/blog.action';
import { formatDateDay } from '@/lib/utils';
import { Metadata } from 'next';
import React from 'react';
import NotFound from './not.found';

interface IBlog {
  blog?: {
    _id: string;
    title: string;
    description: string;
    createdAt: string;
  };
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  if (params.id.length !== 24) {
    return {
      title: 'Not Found',
      description: '404',
    };
  }
  // read route params
  const result: IBlog = await getBlogById({ id: params.id });
  if (!result.blog) {
    return {
      title: 'Not Found',
      description: '404',
    };
  }
  return {
    title: result.blog.title,
    description: result.blog.description,
  };
}

export async function generateStaticParams() {
  const blogIds = await getBlogs();
  return blogIds.map((blog: any) => {
    return { id: blog._id.toString() };
  });
}

const page = async ({ params }: any) => {
  if (params.id.length !== 24) {
    return <NotFound />;
  }
  const result: IBlog = await getBlogById({ id: params.id });
  if (!result.blog) {
    return <NotFound />;
  }
  const blogs = result.blog;

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}
      className='py-10 bg-zinc-100 flex-1'
    >
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
