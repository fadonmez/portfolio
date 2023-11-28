'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import * as z from 'zod';
import { useToast } from '@/components/ui/use-toast';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { sendMail } from '@/lib/actions/mail.action';
import { useState } from 'react';

const formSchema = z.object({
  title: z.string(),
  description: z.string().min(10),
});

const AdminForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    console.log(values);
    try {
      // TODO: Create a server action and implement here
      console.log(values);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      toast({
        title: 'Success',
        description: 'Your blog has been shared successfully',
        duration: 5000,
      });

      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 w-full'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Blog title'
                  className='outline-none focus:border-none w-full'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  rows={7}
                  placeholder='Type your description'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={loading}
          className='w-full disabled:bg-zinc-700'
          type='submit'
        >
          {loading ? 'Loading...' : 'Share a blog write'}
        </Button>
      </form>
    </Form>
  );
};

export default AdminForm;
