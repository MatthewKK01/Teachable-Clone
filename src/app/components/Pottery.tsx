import React from "react";
import pottary from "../images/1680793000-video-thumbnail.avif";
import Image from "next/image";
function Pottery() {
  return (
    <>
      <section className="bg-[#1B4942] px-6 pt-32 pb-16 lg:pt-40">
        <div className="max-w-6xl mx-auto">
          <article>
            <h2 className="font-reckless text-[#CDE2D9] text-4xl lg:text-6xl  2xl:text-6xl mb-10 lg:mb-20">
              From online courses to digital downloads and beyond, this is where
              creative entrepreneurs build the future. Watch the video below
              tosee how Teachable can transform your business.
            </h2>
            <figure className="relative ">
              <Image
                src={pottary}
                layout="responsive"
                sizes="(max-width: 768px) 350px "
                className="relative mx-auto lg:w-[1145px] h-[867px]"
                alt="teachable online courses promo video"
              />
              <div className="bg-white cursor-pointer w-[120px] h-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
                <svg
                  width="60"
                  height="61"
                  viewBox="0 0 60 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <path
                    d="M17.5 12.5792C17.5 10.6012 19.6881 9.40665 21.3519 10.4762L49.2287 28.3971C50.7596 29.3811 50.7596 31.6189 49.2288 32.6029L21.3519 50.5238C19.6881 51.5934 17.5 50.3988 17.5 48.4208V12.5792Z"
                    fill="#21CD9C"
                  />
                </svg>
              </div>

              <figcaption className="text-white font-basisRegular ml-28 font-normal text-base flex items-center">
                Learn more about Teachable
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 60 61"
                  fill="none"
                  className="ml-1 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 12.5792C17.5 10.6012 19.6881 9.40665 21.3519 10.4762L49.2287 28.3971C50.7596 29.3811 50.7596 31.6189 49.2288 32.6029L21.3519 50.5238C19.6881 51.5934 17.5 50.3988 17.5 48.4208V12.5792Z"
                    fill="#21CD9C"
                  />
                </svg>
              </figcaption>
            </figure>
          </article>
        </div>
      </section>
    </>
  );
}

export default Pottery;
