import { Toaster } from '@/components/ui/toaster';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className='grid grid-cols-1 lg:grid-cols-2 place-items-center min-h-screen'>
        <div className='bg-green-300/20 h-full w-full flex items-center justify-center'>
          <p className='text-green-400 text-6xl font-semibold'>Fatih Dönmez</p>
        </div>
        {children}
      </main>
      <Toaster />
    </>
  );
}
