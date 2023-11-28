import Header from '@/components/Header';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex flex-col min-h-screen'>
      <Header />
      {children}
    </main>
  );
}
