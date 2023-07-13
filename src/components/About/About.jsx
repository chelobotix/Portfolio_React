import "@/assets/style/animateText.css";
import Button from "../Button/Button";
import TechAccordion from "../TechAccordion/TechAccordion";

const About = () => {
  return (
    <section className="flex flex-col items-center bg-gradient-to-t from-dark-pink to-dark-blue w-screen p-6">
      <h2 className="animateText text-4xl font-bold mt-8 mb-5 lg:text-5xl lg:mb-20">About</h2>
      <div className="px-6 lg:w-2/3">
        <p className="text-letter-blue text-center text-xl md:text-3xl 2xl:text-4xl  p-2">
          I can help you build a product, feature or website Look through some of my work and experience! If you like what you see
          and have a project you need coded, don't hestiate to contact me.
        </p>
      </div>
      <Button
        name="Get My Resume"
        style={
          "px-4 py-1 text-lg font-semibold border-2 border-letter-blue rounded-3xl text-letter-blue hover:bg-letter-blue hover:border-white hover:text-dark-blue m-8"
        }
      />
      <div className="max-w-xl mt-8">
        <TechAccordion />
      </div>
    </section>
  );
};

export default About;
