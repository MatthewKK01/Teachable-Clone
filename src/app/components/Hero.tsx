import React from "react";
import Image from "next/legacy/image";
import heroImage from "../images/1675095716-heroimage_one-compressed.avif";

function Hero() {
  return (
    <>
      <section className="grid max-w-6xl grid-cols-1 gap-10 px-6 py-10
       mx-auto lg:gap-24 lg:flex lg:flex-row-reverse lg:items-center lg:justify-center">
        <article className="lg:flex-1">
          <h1 className="text-4xl font-reckless lg:text-5xl 2xl:text-6xl">
            Share what you know.™
          </h1>
          <p className="my-10 text-base lg:text-base font-basisRegular">
            Transform your knowledge into a thriving business with the best
            online course platform for creators everywhere.
          </p>

          <form>
            <article className="lg:flex lg:gap-8">
              <input
                type="email"
                name="e"
                id="email"
                placeholder="hello@example.com"
                required
                className="block mb-10 placeholder-black
                border-b border-black outline-none px-4 py-2 w-full lg:flex-1 font-basisRegular"
                autoComplete="off"
              />
              <button
                className="background-green py-2 px-4 w-full bg-shamrock-500 rounded mb-5 lg:w-auto"
                type="submit"
              >
                join for free
              </button>
            </article>
            <small className="block mb-10 text-xs">
              *By submitting your email address, you agree to Teachables Terms
              of use and Privacy Policy.
            </small>
          </form>
        </article>

        <article className="lg:flex-1">
          <Image src={heroImage} alt="share what you know" />
        </article>
      </section>
    </>
  );
}

export default Hero;
