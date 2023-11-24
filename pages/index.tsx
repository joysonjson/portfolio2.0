import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import About from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Joyson Portfolio</title>
      </Head>
      <Header />

      {/* Landing */}
      <section id="landing" className=" snap-start">
        <Landing />
      </section>
      {/* About */}
      <section id="about" className=" snap-center ">
        <About />
      </section>
    </main>
  );
}
