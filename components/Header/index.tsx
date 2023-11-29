'use client';
import React from 'react';
import Link from 'next/link';
import { sidebarLinks } from '@/constants/nav_links';
import MobileNav from '../shared/MobileNav';
import { usePathname } from 'next/navigation';

const Header = async () => {
  const pathname = usePathname();

  return (
    <header className='container flex mx-auto px-7 py-3.5 justify-between items-center '>
      <Link href='/' className='flex items-center gap-2'>
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
              key={link.route}
              className={`${
                isActive
                  ? 'bg-green-300/20 text-green-400 rounded-lg'
                  : 'text-zinc-700 bg-transparent '
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
