/* eslint-disable react/jsx-no-undef */
"use client";

import React, { useState } from "react";
import Image from "next/image";

function Tabs() {
  const data = [
    {
      image: "/images/tab-1.avif",
      quote:
        "What really has clinched it for me, why I chose Teachable, and why I love it and will continue to do my online courses with Teachable, is the great support that they have.",
      title: "Julia Stoian : Live. Write. Thrive",
    },
    {
      image: "/images/tab-2.avif",
      quote:
        "Ninety-five percent of my income comes from online courses. They are literally the perfect product. They’re scalable, fun to make, and you help a lot of people. I don’t normally get obsessed with tech. But I am obsessed with Teachable.",
      title: "Mariah Coz : Marketing for Course Creators",
    },
    {
      image: "/images/tab-3.avif",
      quote:
        "An online course model has given us a unique kind of flexibility...the marginal cost per student is quite small, allowing us to scale a lot quicker than if we were doing, say, in-person training, or some other kind of high-touch industry service.",
      title: "Alan Perlman : Drone Pilot Ground School",
    },
  ];

  const [tabs] = useState(data); // created state for data to map it into document

  const [value, setValue] = useState(0); // created variable, when clicked on list item value would be equal to tab`s mapped index key.

  const { image, quote, title } = tabs[value]; // desctuctured tabs which is depened on value.

  return (
    <div>
      <section className="bg-[#1B4942] py-24 lg:py-32 px-6 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:gap-16     gap-10 lg:grid-cols-2 lg:items-center">
          <article className="lg:w-[570px] mx-auto flex gap-8  flex-col items-center justify-center">
            <ul className="mb-10 flex items-center justify-center gap-7 lg:hidden">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  onClick={() => setValue(index)}
                  className={`tabs ${value === index && "active"} `} // created classname for active span
                ></li>
              ))}
            </ul>
            <p className="text-center w-[128px] pt-2 text-base font-basisRegular  mx-auto border-t-4">
              In my own words
            </p>

            <h3
              style={{ lineHeight: 1.4 }}
              className="font-reckless text-4xl font-medium text-center"
            >
              {quote}
            </h3>

            <p className="font-basisRegular text-xl text-center">{title}</p>
          </article>

          <article className=" mx-auto lg:flex items-center gap-16">
            <Image src={image} width={470} height={623} alt={title} />
            <ul className=" hidden lg:flex flex-col gap-8">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  onClick={() => setValue(index)}
                  className={`tabs ${value === index && "active"} `}
                ></li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Tabs;
