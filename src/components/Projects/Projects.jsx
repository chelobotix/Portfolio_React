import { v4 as uuidv4 } from "uuid";
import Project from "../Project/Project";
import projectList from "./projectList";

const Projects = () => {
  return (
    <section className="flex flex-col items-center bg-gradient-to-t from-dark-pink to-dark-blue w-screen">
      <p className="text-letter-blue text-center text-xl md:text-3xl 2xl:text-4xl  p-2">
        I can help you build a product, feature or website Look through some of my work and experience! If you like what you see
        and have a project you need coded, don't hestiate to contact me.
      </p>
      <h2 className="text-ligth-pink text-3xl font-bold m-5">Projects</h2>
      <div className="flex justify-center flex-wrap gap-9">
        {projectList.map((project) => {
          return <Project title details={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
