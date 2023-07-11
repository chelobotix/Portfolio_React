import Project from "../Project/Project";
import project1 from "@/assets/images/reggae_concert.jpg";
import project2 from "@/assets/images/venom_precision.jpg";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const Projects = () => {
  const projectImages = [
    {
      title: "Reggae Concert",
      image: project1,
      description:
        "Venom Precision Paintball Website: Your go-to source for all things paintball! Explore our extensive collection of articles.",
      techs: ["HTML5", "CSS3", "JavaScript"],
      icon: <FaReact />,
      iconStyle: { color: "orange", size: "2rem" },
    },
    project2,
  ];
  return (
    <section className="flex flex-col items-center bg-gradient-to-t from-dark-pink to-dark-blue w-screen h-screen">
      <p className="text-letter-blue text-center text-xl md:text-3xl 2xl:text-4xl  p-2">
        I can help you build a product, feature or website Look through some of my work and experience! If you like what you see
        and have a project you need coded, don't hestiate to contact me.
      </p>
      <h2 className="text-ligth-pink text-3xl font-bold">Projects</h2>
      <Project title details={projectImages[0]} />
    </section>
  );
};

export default Projects;
