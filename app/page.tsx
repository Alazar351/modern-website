import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Faq from "../components/Faq";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-5  lg:px-20 mx-auto ">
        <Features />
      </div>
      <Faq />
      <Pricing />
    </>
  );
}
