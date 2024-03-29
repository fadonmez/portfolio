import Image from 'next/image';
import React from 'react';
import { MotionDiv } from '../MotionDiv';

interface IProps {
  project: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
}
const item = {
  hidden: { opacity: 0, translateY: 20 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const ProjectCard = ({ project }: IProps) => {
  return (
    <MotionDiv variants={item} className='h-full flex flex-col rounded border-2 border-gray-200 border-opacity-60'>
      <Image src={project.image} alt='image' width={500} height={500} className='rounded ' />
      <div className='p-4  flex flex-col h-full'>
        <h1 className='title-font text-lg font-medium text-gray-900'>
          {project.title}
        </h1>
        <p className='leading-relaxed mb-3'>{project.description}</p>
        <div className='flex items-center flex-wrap mt-auto '>
          <a
              href={project.link}
              target='_blank'
              className='bg-zinc-900 p-4 rounded-md w-fit flex items-center text-zinc-100'
          >
            Check Live Site
            <svg
                className='w-4 h-4 ml-2'
                viewBox='0 0 24 24'
                stroke='currentColor'
                fill='none'
            >
              <path d='M5 12h14'></path>
              <path d='M12 5l7 7-7 7'></path>
            </svg>
          </a>
        </div>
      </div>
    </MotionDiv>
  );
};

export default ProjectCard;
