import Hero from "../../components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
const Main = () => {
  return (
    <main className="flex flex-col items-center w-screen">
      <Hero />
      <Projects />
    </main>
  );
};

export default Main;
