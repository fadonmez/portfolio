import { signOut } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react';
import { Button } from './ui/button';

const LogOut = () => {
  return (
    <form
      className='w-full'
      action={async () => {
        'use server';
        await signOut();
        redirect('/sign-in');
      }}
    >
      <Button className='bg-red-500 px-4 py-2 rounded-md w-full hover:bg-red-600 transition-colors'>
        Log out
      </Button>
    </form>
  );
};

export default LogOut;
