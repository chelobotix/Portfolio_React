import Hero from "../../components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import Modal from "@/components/Modal/Modal";

const Main = () => {
  return (
    <main className="flex flex-col items-center w-screen">
      <Hero />
      <Projects />
      <About />
    </main>
  );
};

export default Main;
