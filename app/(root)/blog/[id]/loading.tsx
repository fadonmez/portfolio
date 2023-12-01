import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <div className='pt-10 flex-1 bg-zinc-100'>
      <div className='container flex flex-col gap-4'>
        <div className='flex flex-col gap-1 mb-6'>
          <Skeleton className='h-8 w-[250px] bg-zinc-300' />
          <Skeleton className='h-6 w-[150px] bg-zinc-300' />
        </div>
        <Skeleton className='h-[700px] bg-zinc-300' />
      </div>
    </div>
  );
};

export default Loading;
