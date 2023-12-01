import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const Loading = () => {
  return (
    <div className='container flex flex-col justify-start py-6 lg:py-24  items-center gap-6 flex-1 w-full'>
      <div className='flex items-center justify-center flex-col gap-6'>
        <Skeleton className='h-5 w-[250px] bg-zinc-300' />
        <Skeleton className='h-3 w-[450px] bg-zinc-300' />
      </div>

      <div className='flex flex-col gap-3 mb-6 mt-5'>
        <Skeleton className='h-40 w-[1300px] bg-zinc-300' />
        <Skeleton className='h-40 w-[1300px] bg-zinc-300' />
        <Skeleton className='h-40 w-[1300px] bg-zinc-300' />
      </div>
    </div>
  );
};

export default Loading;
