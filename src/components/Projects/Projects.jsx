import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Project from "../Project/Project";
import projectList from "./projectList";
import "@/assets/style/animateText.css";

const Projects = () => {
  const [visible, setVisible] = useState("hidden");
  return (
    <section className="flex flex-col items-center bg-gradient-to-t from-dark-pink to-dark-blue w-screen p-6">
      <Modal visible={visible} setvisible={setVisible} />
      <h2 className="animateText text-4xl font-bold mt-8 mb-14 lg:text-5xl lg:mb-20">Projects</h2>
      <div className="flex justify-center flex-wrap gap-9">
        {projectList.map((project) => {
          return <Project key={uuidv4()} title details={project} visible={visible} setVisible={setVisible} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
