'use client';
import { MotionDiv } from '@/components/MotionDiv';
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
import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { sendMail } from '@/lib/actions/mail.action';

const formSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});
const Contact = () => {
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      message: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const res = await sendMail(values);
      if (res.success) {
        toast({
          title: 'Success',
          description: res.message,
          duration: 5000,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      form.reset();
    }
  }

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}
      className='container w-full md:w-1/2  flex flex-col justify-start py-6 lg:py-24  items-center gap-6  h-fit lg:h-[88%]'
    >
      <h2 className='text-5xl font-bold text-center '>Contact Me</h2>
      <p className='text-center text-md text-zinc-600'>
        Please feel free to contact me if you have any questions or concerns.
        You can contact me at{' '}
        <a className='underline' href='mailto:fatihdonmezbusiness@outlook.com'>
          fatihdonmezbusiness@outlook.com
        </a>{' '}
        or by filling out the form below. I&apos;ll get back to you as soon as i
        can.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6 w-full'
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type='email'
                    placeholder='Your email'
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
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    rows={7}
                    placeholder='Type your message here'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='w-full' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    </MotionDiv>
  );
};

export default Contact;
