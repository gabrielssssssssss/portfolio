import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex flex-col max-w-4xl mx-auto">
      <div className="flex items-center justify-between text-[#D4D4D8]  mt-10 text-sm">
        <a type="button" href="">/</a>
        <div className="space-x-6">
          <a type="button" href="">projets</a>
          <a type="button" href="">contact</a>
        </div>
      </div>
    </nav>
  )
}
