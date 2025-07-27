import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: LayoutProps) {
  return (
    <div className='min-h-screen w-full bg-[#0a1f44] flex flex-col'>
      <header className='w-full py-6 bg-[#1a2a4f] border-b-4 border-[#d1a100] shadow-lg' role='banner'>
        <h1 className='text-3xl font-extrabold text-[#d1a100] text-center tracking-wide drop-shadow' id='main-title'>
          FBI Most Wanted
        </h1>
      </header>
      <main className='flex-1 max-w-7xl mx-auto w-full p-4' role='main' aria-labelledby='main-title'>
        {children}
      </main>
      <footer
        className='w-full py-4 bg-[#1a2a4f] border-t-2 border-[#d1a100] text-center text-[#d1a100] text-xs tracking-wide'
        role='contentinfo'>
        &copy; {new Date().getFullYear()} FBI Most Wanted App &mdash; For Law Enforcement Use
      </footer>
    </div>
  );
}
