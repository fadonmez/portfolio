import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center gap-4'>
      <h1 className='text-6xl text-green-500 font-bold '>404</h1>
      <p className='text-lg text-zinc-600 w-1/2 text-center'>
        Page not found. Please check the URL or contact the administrator. If
        you think this is a bug, please report it Thank you for your
        understanding.
      </p>
      <Link href='/'>
        <Button>Main Menu</Button>
      </Link>
    </div>
  );
};

export default NotFound;
