'use client';
import { sidebarLinks } from '@/constants/nav_links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
const DesktopNav = () => {
  const pathname = usePathname();
  return (
    <nav className='md:flex items-center gap-x-8 hidden '>
      {sidebarLinks.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;

        return (
          <Link
            key={link.route}
            className={`${
              isActive
                ? 'bg-green-300/20 text-green-700 rounded-lg font-semibold'
                : 'text-zinc-700 bg-transparent '
            } px-4 py-2`}
            href={link.route}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default DesktopNav;
