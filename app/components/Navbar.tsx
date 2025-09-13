import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex flex-col max-w-4xl mx-auto">
      <div className="flex items-center justify-between text-[#D4D4D8]  mt-10 text-sm">
        <Link href="/">/</Link>
        <div className="space-x-6">
          <Link href="/posts">posts</Link>
          <Link href="/contact">contact</Link>
        </div>
      </div>
    </nav>
  )
}
