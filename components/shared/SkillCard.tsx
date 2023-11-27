import Image from 'next/image';
import React from 'react';
import { MotionDiv } from '../MotionDiv';

interface Iprops {
  skill: {
    title: string;
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

const SkillCard = ({ skill }: Iprops) => {
  return (
    <MotionDiv
      variants={item}
      className='bg-fuchsia-300/30 border border-fuchsia-200 text-zinc-800  flex px-4 py-2  rounded-md items-center justify-center gap-4'
    >
      {skill.title}
    </MotionDiv>
  );
};

export default SkillCard;
