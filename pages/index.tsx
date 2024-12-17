import About from "@/components/About";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import NavBar from "@/components/NavBar";
import Skills from "@/components/Skills";
import Head from "next/head";
import { useRouter } from "next/router";
import Shop from "@/components/Shop";

const Home = () => {
  const router = useRouter();

  return (
    <main className=" bg-white text-whit w-fulle  snap-y snap-mandatory  z-0">
      <Head>
        <title>Trail Treat</title>
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
      <section id="skills" className=" snap-center overflow-x-hidden">
        <Shop />
      </section>
      {/* <section id="experience" className="snap-center ">
        <Experience /> */}
      {/* <HorizontalScrollCarouselExperience /> */}
      {/* </section> */}
      {/* <section id="projects" className=" snap-start ">
        <HorizontalScrollCarouselProjects />
      </section> */}
      {/* <section id="contact" className=" snap-start overflow-x-hidden h-screen">
        <Memories />
      </section> */}
      {/* <TrippyScroll /> */}
      {/* <section id="contact" className=" snap-start overflow-x-hidden">
        <Contact />
      </section> */}
      {/* <NavBar /> */}
    </main>
  );
};
export default Home;
