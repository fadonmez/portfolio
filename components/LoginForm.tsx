'use client';
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useToast } from '@/components/ui/use-toast';
import { authenticate } from '@/lib/actions/auth.actions';

const LoginForm = () => {
  const { toast } = useToast();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (formData: any) => {
    setLoading(true);
    try {
      const data = await authenticate(formData);
      if (data) {
        setError(data.error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form action={handleLogin} className='max-w-sm mx-auto'>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Your email
        </label>
        <Input
          name='email'
          id='email'
          type='email'
          placeholder='Email'
          required
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='password'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Your password
        </label>
        <Input
          id='password'
          name='password'
          type='password'
          placeholder='Password'
          required
        />
      </div>

      <Button
        type='submit'
        className='w-full bg-green-300/20 text-green-600 hover:bg-green-300/30'
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Login'}
      </Button>
      <p className='text-red-500'>{error}</p>
    </form>
  );
};

export default LoginForm;
