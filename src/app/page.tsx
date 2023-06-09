import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pottery from "./components/Pottery";
import Join from "./components/Join";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Pottery />
      <Join />
    </>
  );
}
