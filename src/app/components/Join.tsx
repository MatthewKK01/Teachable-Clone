import React from "react";
import chess from "../images/1665542220-unnamed.avif";
import Image from "next/image";

function Join() {
  return (
    <>
      <section>
        <article>
          <Image src={chess} width={573} height={408} alt="man playing chess" />
        </article>

        <article>
          <h2 className="font-reckless text-4xl lg:text-5xl">
            Join more than 100,000 creators who’ve sold over $1 billion in
            courses and coaching.
          </h2>
          <button>View features</button>
        </article>
      </section>
    </>
  );
}

export default Join;
