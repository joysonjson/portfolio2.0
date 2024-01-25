import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import HorizontalScrollCarouselExperience from "@/components/HorizontalScrollCarouselExperience";
import HorizontalScrollCarouselProjects from "@/components/HorizontalScrollCarouselProjects";
import Landing from "@/components/Landing";
import NavBar from "@/components/NavBar";
import Skills from "@/components/Skills";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
// import TrippyScroll from "@/components/trippy";
const Home = () => {
  const router = useRouter();

  return (
    <main className=" bg-[rgb(36,36,36)] text-whit w-fulle  snap-y snap-mandatory  z-0">
      <Head>
        <title>Joyson Portfolio</title>
      </Head>
      <Header />

      <section id="landing" className=" snap-start overflow-x-hidden">
        <Landing />
      </section>
      <section id="about" className=" snap-center overflow-x-hidden">
        <About />
      </section>
      <section id="skills" className=" snap-center overflow-x-hidden">
        <Skills />
      </section>
      <section id="experience" className=" snap-center ">
        <HorizontalScrollCarouselExperience />
      </section>
      {/* <TrippyScroll /> */}
      <section id="projects" className=" snap-start ">
        <HorizontalScrollCarouselProjects />
      </section>
      <section id="contact" className=" snap-start overflow-x-hidden">
        <Contact />
      </section>
      <NavBar />
    </main>
  );
};
export default Home;
