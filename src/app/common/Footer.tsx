import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#232223] text-white">
        <div className="max-w-6xl mx-auto py-20 lg:py-24 px-8 lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <Link href="/">
              <Image
                alt="teachable logo"
                width={148}
                height={24}
                src="https://www.datocms-assets.com/67254/1659376527-teachable_logo.svg"
              />
            </Link>
            <p className="mb-20 mt-8">
              Join the more than 100,000 creators who use Teachable to share
              their knowledge. Easily create and sell courses, coaching, and
              digital downloads with our powerful yet simple no-code platform.
            </p>
          </div>
          <div className="grid mt-20 lg:mt-0 grid-cols-2 gap-y-20 gap-x-6 lg:grid-cols-3">
            <article>
              <h4
                className="text-lg font-basisMedium mb-6"
                style={{ lineHeight: "145%" }}
              >
                Explore
              </h4>
              <ul className="flex flex-col gap-2 flex-nowrap">
                <Link href={"*"}>
                  <li
                    className="text-base basisregular"
                    style={{ lineHeight: "145%", letterSpacing: "-0/27px" }}
                  >
                    Features
                  </li>
                </Link>
                <Link href={"*"}>
                  <li
                    className="text-base basisregular"
                    style={{ lineHeight: "145%", letterSpacing: "-0/27px" }}
                  >
                    Pricing
                  </li>
                </Link>
                <Link href={"*"}>
                  <li
                    className="text-base basisregular"
                    style={{ lineHeight: "145%", letterSpacing: "-0/27px" }}
                  >
                    Examples
                  </li>
                </Link>
                <Link href={"*"}>
                  <li
                    className="text-base basisregular"
                    style={{ lineHeight: "145%", letterSpacing: "-0/27px" }}
                  >
                    Newsletter
                  </li>
                </Link>
                <Link href={"*"}>
                  <li
                    className="text-base basisregular"
                    style={{ lineHeight: "145%", letterSpacing: "-0/27px" }}
                  >
                    Community
                  </li>
                </Link>
                <Link href={"*"}>
                  <li
                    className="text-base basisregular"
                    style={{ lineHeight: "145%", letterSpacing: "-0/27px" }}
                  >
                    Podcast
                  </li>
                </Link>
              </ul>
            </article>
            <article>
              <h4
                className="text-lg font-basisMedium mb-6"
                style={{ lineHeight: "145%" }}
              >
                Company
              </h4>
              <ul className="flex flex-col gap-2 flex-nowrap">
                <Link href={"*"}>
                  <li
                    className="text-base basisregular"
                    style={{ lineHeight: "145%", letterSpacing: "-0/27px" }}
                  >
                    About
                  </li>
                </Link>
                <Link href={"*"}>
                  <li
                    className="text-base basisregular"
                    style={{ lineHeight: "145%", letterSpacing: "-0/27px" }}
                  >
                    Careers
                  </li>
                </Link>
                <Link href={"*"}>
                  <li
                    className="text-base basisregular"
                    style={{ lineHeight: "145%", letterSpacing: "-0/27px" }}
                  >
                    Blog
                  </li>
                </Link>
                <Link href={"*"}>
                  <li
                    className="text-base basisregular"
                    style={{ lineHeight: "145%", letterSpacing: "-0/27px" }}
                  >
                    Press
                  </li>
                </Link>
                <Link href={"*"}>
                  <li
                    className="text-base basisregular"
                    style={{ lineHeight: "145%", letterSpacing: "-0/27px" }}
                  >
                    Partners
                  </li>
                </Link>
              </ul>
            </article>
            <article>
              <h4
                className="text-lg font-basisMedium mb-6"
                style={{ lineHeight: "145%" }}
              >
                Support
              </h4>
              <ul className="flex flex-col gap-2 flex-nowrap">
                <Link href={"*"}>
                  <li
                    className="text-base basisregular"
                    style={{ lineHeight: "145%", letterSpacing: "-0/27px" }}
                  >
                    Knowledge
                  </li>
                </Link>
                <Link href={"*"}>
                  <li
                    className="text-base basisregular"
                    style={{ lineHeight: "145%", letterSpacing: "-0/27px" }}
                  >
                    Contact Support
                  </li>
                </Link>
                <Link href={"*"}>
                  <li
                    className="text-base basisregular"
                    style={{ lineHeight: "145%", letterSpacing: "-0/27px" }}
                  >
                    Privacy Policy
                  </li>
                </Link>
                <Link href={"*"}>
                  <li
                    className="text-base basisregular"
                    style={{ lineHeight: "145%", letterSpacing: "-0/27px" }}
                  >
                    Terms of use
                  </li>
                </Link>
                <Link href={"*"}>
                  <li
                    className="text-base basisregular"
                    style={{ lineHeight: "145%", letterSpacing: "-0/27px" }}
                  >
                    Content Guidelines
                  </li>
                </Link>
                <Link href={"*"}>
                  <li
                    className="text-base basisregular"
                    style={{ lineHeight: "145%", letterSpacing: "-0/27px" }}
                  >
                    House Rules
                  </li>
                </Link>
                <Link href={"*"}>
                  <li
                    className="text-base basisregular"
                    style={{ lineHeight: "145%", letterSpacing: "-0/27px" }}
                  >
                    Cookies Policy
                  </li>
                </Link>
                <Link href={"*"}>
                  <li
                    className="text-base basisregular"
                    style={{ lineHeight: "145%", letterSpacing: "-0/27px" }}
                  >
                    Ethics Line
                  </li>
                </Link>
                <Link href={"*"}>
                  <li
                    className="text-base basisregular"
                    style={{ lineHeight: "145%", letterSpacing: "-0/27px" }}
                  >
                    Accesebility
                  </li>
                </Link>
              </ul>
            </article>
          </div>
        </div>
      </footer>
      <div className="bg-[#232223]">
        <div className="max-w-6xl mx-auto px-7 py-10 flex flex-col justify-center gap-y-5 items-center lg:flex-row-reverse lg:justify-between ">
          <ul className="flex flex-row gap-2">
            <li>
              <Image
                src={
                  "https://www.datocms-assets.com/67254/1659378126-youtube-social.svg"
                }
                width={32}
                height={32}
                className="lg:w-10 h-10 cursor-pointer"
                alt="YouTube"
              />
            </li>
            <li>
              <Image
                src={
                  "https://www.datocms-assets.com/67254/1659378111-fb-social.svg"
                }
                width={32}
                height={32}
                className="lg:w-10 h-10 cursor-pointer"
                alt="FaceBook"
              />
            </li>
            <li>
              <Image
                src={
                  "https://www.datocms-assets.com/67254/1659378156-pinterest-social.svg"
                }
                width={32}
                height={32}
                className="lg:w-10 h-10 cursor-pointer"
                alt="Pinterest"
              />
            </li>
            <li>
              <Image
                src={
                  "https://www.datocms-assets.com/67254/1659378170-ig-social.svg"
                }
                width={32}
                height={32}
                className="lg:w-10 h-10 cursor-pointer"
                alt="Instagram"
              />
            </li>
            <li>
              <Image
                src={
                  "https://www.datocms-assets.com/67254/1659378185-twitter-social.svg"
                }
                width={32}
                height={32}
                className="lg:w-10 h-10 cursor-pointer"
                alt="Twitter"
              />
            </li>
            <li>
              <Image
                src={
                  "https://www.datocms-assets.com/67254/1659378200-li-social.svg"
                }
                width={32}
                height={32}
                className="lg:w-10 h-10 cursor-pointer"
                alt="LinkedIn"
              />
            </li>
            <li>
              <Image
                src={
                  "https://www.datocms-assets.com/67254/1663792941-tt-social.svg"
                }
                width={32}
                height={32}
                className="lg:w-10 h-10 cursor-pointer"
                alt="TikTok"
              />
            </li>
          </ul>
          <p className="text-white text-sm text-center lg:text-left w-60 lg:w-full">
            Copyright &copy; {currentYear} Teachable, Inc. All rights reserved{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
