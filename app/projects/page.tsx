import { MotionDiv } from '@/components/MotionDiv';
import ProjectCard from '@/components/shared/ProjectCard';
import { projects } from '@/constants/projects';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My previous projects',
};

const Projects = () => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}
      className='container flex flex-col justify-start py-6 lg:py-24  items-center gap-6  h-fit lg:h-[88%] w-full  '
    >
      <h2 className='text-5xl font-bold text-center '>My Projects</h2>
      <p className='text-center text-md text-zinc-600'>
        I&apos;m a software engineer with a passion for creating beautiful and
        functional web applications. I&apos;m currently working at a startup
        called{' '}
        <a
          className='font-semibold underline'
          href='XXXXXXXXXXXXXXXXXXX'
          target='_blank'
        >
          Kodlama.io
        </a>{' '}
        as a full-stack developer. I&apos;ve worked on various projects ranging
        from simple web applications to complex enterprise-level applications.
        Check out my latest projects below and let me know if you&apos;d like to
        work together!
      </p>
      <MotionDiv
        variants={container}
        initial='hidden'
        animate='visible'
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center  gap-6 '
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </MotionDiv>
    </MotionDiv>
  );
};

export default Projects;
