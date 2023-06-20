import React from "react";

function CTA() {
  return (
    <>
      <section className="py-20 lg:py-24 px-8 bg-[#21CD9C]">
        <div className="max-w-6xl mx-auto">
          <h2 className=" text-center font-reckless text-4xl lg:text-5xl 2xl:text-6xl mb-10">
            Share what you know.™ <br />
            Sign up free today.
          </h2>
          <button className="bg-black block mx-auto  text-white py-4 px-7 rounded hover:opacity-75 transition-all duration-150">
            Start for free
          </button>
        </div>
      </section>
    </>
  );
}

export default CTA;
