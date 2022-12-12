import Head from "next/head";
import HeroSection from "../components/HeroSection";
export default function Home() {
  return (
    <>
      <Head>
        <title>Ashish - Portfolio & Blog</title>
      </Head>
      <HeroSection />
      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded bg-white h-40 shadow-sm"></div>
        <div className="rounded bg-white h-40 shadow-sm"></div>
        <div className="rounded bg-white h-40 shadow-sm"></div>
      </div>
    </>
  );
}
