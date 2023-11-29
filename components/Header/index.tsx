import React from 'react';
import Link from 'next/link';
import MobileNav from '../shared/MobileNav';
import DesktopNav from '../shared/DesktopNav';
import LogOut from '@/components/LogOut';

const Header = async () => {
  return (
    <header className='container flex mx-auto px-7 py-3.5 justify-between items-center '>
      <Link href='/' className='flex items-center gap-2'>
        <div className='flex items-start justify-start flex-col'>
          <h3 className='font-bold text-xl md:text-3xl '>Fatih Dönmez</h3>
          <p className=' text-zinc-600'>Software Engineer</p>
        </div>
      </Link>
      <div className='flex'>
        <DesktopNav />
        {/* <LogOut /> */}
      </div>

      <MobileNav />
    </header>
  );
};

export default Header;
