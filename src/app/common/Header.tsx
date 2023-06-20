"use client";
import Link from "next/link";

import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between py-7 px-6 border-b border-black">
      <div className="flex items-center gap-8">
        <Link href="/">
          <Image
            alt="teachable logo"
            width={110}
            height={18}
            src="https://www.datocms-assets.com/67254/1659386300-teachable_logo-header.svg"
          />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex gap-8 font-basisRegular text-base">
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Examples</li>
            <li>Resources</li>
          </ul>
        </nav>
      </div>

      {isOpen && (
        <nav className="absolute lg:hidden bg-white top-0 bottom-0 left-0 right-0 z-50 mt-20 p-8">
          <ul className="text-2xl flex flex-col gap-8">
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Examples</li>
            <li>Resources</li>
          </ul>
        </nav>
      )}

      <div className="hidden lg:flex lg:gap-8">
        <button>Login</button>
        <button>Join for free</button>
      </div>

      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="menu-button flex gap-[6px]   flex-col"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
