import { IconContext } from "react-icons";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button";
import style from "./Project.module.css";

const Project = (props) => {
  const { title, image, description, techs, techsStyle, icon, iconStyle } = props.details;
  console.log(icon);
  return (
    <article
      className={`${style.projectArticle} bg-gradient-to-t from-dark-purple to-dark-pink flex flex-col items-center  rounded-2xl border border-letter-blue`}
    >
      <div className="relative">
        <div className={`${style.icon}`}>
          <IconContext.Provider value={iconStyle}>
            <div className={`bg-dark-purple p-4 rounded-full border-letter-blue border-t-2 border-l-2`}>{icon}</div>
          </IconContext.Provider>
        </div>
      </div>
      <img className="w-64 h-56 rounded-2xl mt-9 border-2 border-letter-blue" src={image} alt="project_iamge" />

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
      <p className="text-sm text-letter-blue mt-2 text-center">{description}</p>
      <div className="flex gap-2 mt-4 mb-6">
        <Button
          name="Brief Scan"
          style={
            "px-4 py-1 text-sm font-semibold border-2 border-letter-blue rounded-3xl text-letter-blue hover:bg-letter-blue hover:border-white hover:text-dark-blue"
          }
        />
        <Button
          name="Live Demo"
          style={
            "px-4 py-1 text-sm font-semibold border-2 border-letter-blue bg-letter-blue rounded-3xl text-dark-blue hover:border-white "
          }
        />
      </div>
    </article>
  );
};

export default Project;
