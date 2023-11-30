'use client';
import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import { BiMenuAltLeft } from 'react-icons/bi';
import { usePathname } from 'next/navigation';
import { sidebarLinks } from '@/constants/nav_links';

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className='flex h-fit flex-col gap-4  pt-6 overflow-auto  '>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? ' bg-green-300/20 text-green-700 font-semibold rounded-lg'
                  : 'text-zinc-700 bg-transparent  '
              } flex items-center justify-start gap-4 p-4  `}
            >
              <p className={`${isActive ? 'base-bold' : 'base-medium'}`}>
                {' '}
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className='block md:hidden'>
        <BiMenuAltLeft size={32} />
      </SheetTrigger>
      <SheetContent className='border-none  flex flex-col  '>
        <SheetClose asChild>
          <Link href='/' className='flex items-center gap-1'>
            <p>Fatih Donmez</p>
          </Link>
        </SheetClose>

        <SheetClose asChild>
          <NavContent />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
