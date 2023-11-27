import { MotionDiv } from '@/components/MotionDiv';
import SkillCard from '@/components/shared/SkillCard';
import { skills } from '@/constants/skills';
import React from 'react';

const container = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}
      className='container flex flex-col justify-start py-6 lg:py-32  items-center gap-6  h-fit lg:h-[88%] w-full  '
    >
      <h2 className='text-5xl font-bold text-center '>My Skills</h2>
      <p className='text-md text-zinc-600 text-center'>
        I have a strong background in web development and have experience
        working with various programming languages and frameworks.
      </p>
      <MotionDiv
        variants={container}
        initial='hidden'
        animate='visible'
        className='flex h-fit items-center justify-center mx-auto w-full md:w-1/2 flex-wrap  gap-6 '
      >
        {skills.map((skill) => (
          <SkillCard key={skill.title} skill={skill} />
        ))}
      </MotionDiv>
    </MotionDiv>
  );
};

export default Skills;
