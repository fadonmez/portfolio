'use server';

import { mailType } from '@/types';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail(values: mailType) {
  const { email, message } = values;
  //   const mail = await import('@sendgrid/mail');
  //   mail.setApiKey(process.env.SENDGRID_API_KEY);

  //   const msg = {
  //     to: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  //     from: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  //     subject: 'New message from website',
  //     text: `Email: ${email}\nMessage: ${message}`,
  //   };

  //   await mail.send(msg);
  try {
    const res = await resend.emails.send({
      from: `onboarding@resend.dev`,
      to: 'fatihdonmezbusiness@outlook.com',
      subject: 'New message from website',
      reply_to: `${values.email}`,
      text: `${values.message}`,
    });
  } catch (error) {
    console.log(error);
  }

  return {
    success: true,
    message: `Email sent successfully `,
  };
}
