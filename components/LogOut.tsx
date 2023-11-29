import { auth, signOut } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react';
import { Button } from './ui/button';

const LogOut = async () => {
  const session = await auth();
  return (
    <form
      className={`w-full ${session ? 'block' : 'hidden'}`}
      action={async () => {
        'use server';
        await signOut();
        redirect('/sign-in');
      }}
    >
      <Button className='bg-red-500 px-4 py-2 rounded-md w-fit justify-self-end hover:bg-red-600 transition-colors'>
        Log out
      </Button>
    </form>
  );
};

export default LogOut;
