import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formatDate(inputDate: string): string {
  const date = new Date(inputDate);
  const options = {
    year: 'numeric',
    month: 'long',
  } as Intl.DateTimeFormatOptions;

  return date.toLocaleDateString('en-US', options);
}

export function formatDateDay(inputDate: string): string {
  const date = new Date(inputDate);
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  } as Intl.DateTimeFormatOptions;

  return date.toLocaleDateString('en-US', options);
}

export const getData = async () => {
  const result = await fetch(
    `${process.env.API_URL}/api/blogs?secret=${process.env.API_SECRET}`
  );
  const data = await result.json();
  return data;
};
