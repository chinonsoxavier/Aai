"use client"
import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { useStore } from '../zustand/zustand';
import { footerBg } from '@/constants/exports';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const menuOpen = useStore((state: any) => state.menuOpen);

  return (
    <main className={`relative`}>
      <main>
        <div className="">{children}</div>
        <section>
          <footer
            className="w-full h-full  pt-20"
            style={{
              backgroundImage: `url(${footerBg.src})`,
              backgroundSize: "cover",
            }}
          >
            <Footer />
          </footer>
        </section>
      </main>
    </main>
  );
};

export default Layout