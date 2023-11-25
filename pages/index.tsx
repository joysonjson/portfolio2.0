import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import HorizontalScrollCarouselExperience from "@/components/HorizontalScrollCarouselExperience";
import HorizontalScrollCarouselProjects from "@/components/HorizontalScrollCarouselProjects";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";

const Example = () => {
  return (
    <main className=" bg-[rgb(36,36,36)] text-white  snap-y snap-mandatory  z-0">
      <Head>
        <title>Joyson Portfolio</title>
      </Head>
      <Header />
      <section id="landing" className=" snap-start">
        <Landing />
      </section>
      <section id="about" className=" snap-center ">
        <About />
      </section>
      <section id="skills" className=" snap-center ">
        <Skills />
      </section>
      <section id="experience" className=" snap-center ">
        <HorizontalScrollCarouselExperience />
      </section>
      <section id="projects" className=" snap-start ">
        <HorizontalScrollCarouselProjects />
      </section>
      <section id="contact" className=" snap-start ">
        <Contact />
      </section>
    </main>
  );
};
export default Example;
