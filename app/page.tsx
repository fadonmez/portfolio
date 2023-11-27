import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-black h-[88%]'>
      <div className='container flex flex-col items-center h-full justify-center '>
        <h1 className='text-4xl md:text-6xl font-semibold text-center text-white '>
          Welcome to my <br />
          <span className=' text-fuchsia-600'>
            portfolio and personal blog !
          </span>
        </h1>
        <p className='text-zinc-200 text-center mt-6 text-md md:text-lg'>
          I&apos;m a software engineer with a passion for creating beautiful and
          functional web applications. I&apos;m currently working at a startup
          called{' '}
          <a
            className='text-fuchsia-400 underline'
            href='https://tayfun.net/'
            target='_blank'
          >
            Kodlama.io
          </a>
          , where I&apos;ve been developing web applications for a while. I have
          a background in computer science and have a strong understanding of
          object-oriented programming.{' '}
          <p className='hidden md:block'>
            I&apos;m a quick learner and collaborate closely with clients to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems. I&apos;m excited to continue my journey as a
            software engineer and to contribute my skills to the world of web
            development. Thank you for taking the time to visit my portfolio and
            blog. Let&apos;s work together to bring your ideas to life!
          </p>
        </p>
        <Link
          href='/contact'
          className='bg-fuchsia-600 text-white px-6 py-3 rounded-md mt-6'
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
