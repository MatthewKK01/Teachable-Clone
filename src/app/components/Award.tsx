/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import Image from "next/image";
import award from "../images/1655186804-award-winning-support-for-creators.avif";

function Award() {
  return (
    <>
      <div className=""></div>
      <div className="max-w-6xl"></div>

      <section className="bg-[#1B4942] py-20 px-8 lg:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ">
          <article className="order-last">
            <h2 className="font-reckless text-white mb-10 text-4xl lg:text-5xl">
              Award-winning support for creators and businesses of all sizes and
              subjects.
            </h2>

            <button className="text-white text-lg font-basisRegular border-b-2 border-solid border-white">
              Contact Us
            </button>
          </article>
          <article>
            <Image src={award} alt="establishde" />
          </article>
        </div>
      </section>
    </>
  );
}

export default Award;
