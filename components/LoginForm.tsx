'use client';
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useToast } from '@/components/ui/use-toast';

const LoginForm = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: 'Success',
      description: 'test',
      duration: 5000,
    });
    console.log(email, pass);
    setLoading(true);
    try {
      // TODO: Build an authentication system with next-auth and mongodb
    } catch (error) {
      console.log(error);
    } finally {
      setEmail('');
      setPass('');
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className='max-w-sm mx-auto'>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Your email
        </label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type='text'
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
    </form>
  );
};

export default LoginForm;
