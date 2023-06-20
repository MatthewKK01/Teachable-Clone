/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import establish from "../images/1675096596-quickstart-compressed.avif";

function Establish() {
  return (
    <>
      <section className="bg-[#CDE2D9] py-20 px-8 lg:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <article>
            <h2 className="font-basisRegular mb-10 text-[#1B4942] text-4xl lg:text-5xl">
              Establish your business's hub on Teachable
            </h2>
            <p className="font-basisRegular mb-10 text-[#1B4942] text-lg">
              In this free mini course, learn how to showcase your business and
              start collecting leads on Teachable in just five days.
            </p>
            <button className="text-[#1B4942] text-lg font-basisRegular border-b-2 border-solid border-[#1B4942]">
              Register for free
            </button>
          </article>
          <article>
            <Image src={establish} alt="establishde" />
          </article>
        </div>
      </section>
    </>
  );
}

export default Establish;
