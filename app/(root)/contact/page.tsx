import ContactForm from '@/components/ContactForm';
import { MotionDiv } from '@/components/MotionDiv';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact with me',
};

const Contact = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}
      className='container w-full md:w-1/2  flex flex-col justify-start py-6 lg:py-24  items-center gap-6 flex-1'
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
      <ContactForm />
    </MotionDiv>
  );
};

export default Contact;
