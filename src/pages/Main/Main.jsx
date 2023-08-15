import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import ContactForm from "@/components/ContactForm/ContactForm";

const Main = () => {
  return (
    <main className="flex flex-col items-center w-screen">
      <Hero />
      <ScrollToTopButton />

      <Projects />
      <About />
      <ContactForm />
    </main>
  );
};

export default Main;
