import { IconContext } from "react-icons";
import style from "./Project.module.css";

const Project = (props) => {
  const { title, image, description, techs, icon, iconStyle } = props.details;
  console.log(icon);
  return (
    <article className="w-72 min-w-72 bg-gradient-to-t from-dark-purple to-dark-pink flex flex-col items-center mx-6 rounded-2xl border border-letter-blue">
      <div className="relative">
        <div className={`${style.icon}`}>
          <IconContext.Provider value={iconStyle}>
            <div className={`bg-dark-purple p-4 rounded-full border-t-2 border-l-2`}>{icon}</div>
          </IconContext.Provider>
        </div>
      </div>
      <img className="w-64 h-56 rounded-2xl mt-9 border-2 border-letter-blue" src={image} alt="project_iamge" />

      <h3 className="text-2xl font-semibold text-white mt-3">{title}</h3>
      <p className="text-sm text-letter-blue mt-2 text-center">{description}</p>
      <ul>
        {techs.map((tech) => (
          <li>{tech}</li>
        ))}
      </ul>
    </article>
  );
};

export default Project;
