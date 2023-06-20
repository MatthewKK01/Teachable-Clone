import Link from "next/link";
import React from "react";
import Image from "next/image";

import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-7 px-6 border-b border-black">
      <div>
        <Link href="/">
          <Image
            alt="teachable logo"
            width={110}
            height={18}
            src="https://www.datocms-assets.com/67254/1659386300-teachable_logo-header.svg"
          />
        </Link>
      </div>

      <div>
        <button>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
