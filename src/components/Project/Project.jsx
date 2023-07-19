import { useState } from "react";
import { IconContext } from "react-icons";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button";
import style from "./Project.module.css";

const Project = (props) => {
  const { id, title, images, description, techs, techsStyle, icon, iconStyle, liveDemo } = props.details;
  const { modalConf, setModalConf } = props;

  const sliceDescription = (string) => {
    if (string.length <= 99) {
      return string;
    }
    let shortDescription = "";
    for (let i in string) {
      if (i > 100 && string[i] === " ") {
        return `${shortDescription}...`;
      }
      shortDescription += string[i];
    }
  };

  return (
    <article className={`${style.projectArticle} articleProject`}>
      <div className="relative">
        <div className={`${style.icon}`}>
          <IconContext.Provider value={iconStyle}>
            <div className={`bg-dark-purple p-4 rounded-full border-letter-blue border-t-2 border-l-2`}>{icon}</div>
          </IconContext.Provider>
        </div>
      </div>
      <img
        className="w-72 h-48 md:w-80 md:h-56 2xl:w-80 2xl:h-60 rounded-2xl mt-9 border-2 border-letter-blue"
        src={images[0]}
        alt="project_iamge"
      />

      <h3 className="text-3xl font-semibold text-white mt-3">{title}</h3>
      <ul className="flex">
        {techs.map((tech) => (
          <IconContext.Provider key={uuidv4()} value={techsStyle}>
            <li className="m-1" key={uuidv4()}>
              {tech}
            </li>
          </IconContext.Provider>
        ))}
      </ul>
      <p className="text-sm text-letter-blue mt-2 px-6 text-center">{sliceDescription(description)}</p>
      <div className="flex gap-2 mt-4 mb-6">
        <Button
          name="Brief Scan"
          style={
            "px-4 py-1 text-sm font-semibold border-2 border-letter-blue rounded-3xl text-letter-blue hover:bg-letter-blue hover:border-white hover:text-dark-blue"
          }
          modalConf={modalConf}
          setModalConf={setModalConf}
          projectId={id}
          type={"button"}
        />
        <Button
          name="Live Demo"
          style={
            "px-4 py-1 text-sm font-semibold border-2 border-letter-blue bg-letter-blue rounded-3xl text-dark-blue hover:border-white "
          }
          liveDemo={liveDemo}
          modalConf={modalConf}
          setModalConf={setModalConf}
          projectId={id}
          type={"button"}
        />
      </div>
    </article>
  );
};

export default Project;
