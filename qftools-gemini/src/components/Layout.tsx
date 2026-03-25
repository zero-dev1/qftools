import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { AnimatePresence } from 'motion/react';

export function Layout() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-body pb-20">
      <Navigation />
      <main className="max-w-[1440px] mx-auto pt-14 px-6 md:px-20 lg:px-[124px]">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
    </div>
  );
}
