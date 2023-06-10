/* eslint-disable react/no-unescaped-entities */
import React from "react";
import chess from "../images/1665542220-unnamed.avif";
import Image from "next/image";

function Join() {
  return (
    <>
      <section className="px-6 py-10 lg:py-20 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center max-w-6xl mx-auto">
        <article>
          <Image src={chess} width={573} height={408} alt="man playing chess" />
        </article>

        <article>
          <h2 className="font-reckless text-[#1B4942] text-4xl lg:text-5xl mb-10">
            Join more than 100,000 creators who’ve sold over $1 billion in
            courses and coaching.
          </h2>
          <button className="text-[#1B4942] border-b-2 border-solid border-[#1B4942]">
            View features
          </button>
        </article>
      </section>

      <section className="px-6 py-10 lg:py-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <article>
          <span className="font-reckless font-bold block mb-10 pb-4 border-b-2 border-solid border-[#1B4942] text-[#1B4942] text-3xl">
            1
          </span>
          <h3 className=" mb-3 font-basisRegular text-[#1B4942] text-4xl">
            Easy as it gets.
          </h3>
          <p className="text-[#1B4942] font-basisRegular text-base lg:text-lg">
            In a matter of minutes, you’ll have access to everything you could
            ever need to create and sell online courses and coaching—our
            stress-free platform makes it easy—tech skills or no tech skills.
          </p>
        </article>
        <article>
          <span className="font-reckless font-bold block mb-10 pb-4 border-b-2 border-solid border-[#1B4942] text-[#1B4942] text-3xl">
            2
          </span>
          <h3 className=" mb-3 font-basisRegular text-[#1B4942] text-4xl">
            Teach the way you want to learn.
          </h3>
          <p className="text-[#1B4942] font-basisRegular text-base lg:text-lg">
            This is the fun part. Show off your brand’s unique POV by using our
            customization tools to curate and personalize your content.
          </p>
        </article>
        <article>
          <span className="font-reckless font-bold block mb-10 pb-4 border-b-2 border-solid border-[#1B4942] text-[#1B4942] text-3xl">
            3
          </span>
          <h3 className=" mb-3 font-basisRegular text-[#1B4942] text-4xl">
            The small matter of getting paid.
          </h3>
          <p className="text-[#1B4942] font-basisRegular text-base lg:text-lg">
            You didn't go into business to stress over money (quite the
            opposite) so we've got that covered. Payouts, taxes, affiliates,
            authors, that's our thing—you do yours.
          </p>
        </article>
      </section>
    </>
  );
}

export default Join;
