'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from '@/constants/nav_links';
import MobileNav from '../shared/MobileNav';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className='container flex mx-auto px-7 py-3.5 justify-between items-center h-[12%]'>
      <Link href='/' className='flex items-center gap-2'>
        <Image
          width={80}
          className='rounded-full'
          height={80}
          alt='avatar'
          src='https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp'
        />

        <div className='flex items-start justify-start flex-col'>
          <h3 className='font-bold text-xl md:text-3xl '>Fatih Dönmez</h3>
          <p className=' text-zinc-600'>Software Engineer</p>
        </div>
      </Link>
      <nav className='md:flex items-center gap-x-8 hidden'>
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              className={`${
                isActive
                  ? 'bg-fuchsia-300/20 text-fuchsia-400 rounded-lg'
                  : 'text-zinc-700 '
              } px-4 py-2`}
              href={link.route}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <MobileNav />
    </header>
  );
};

export default Header;
