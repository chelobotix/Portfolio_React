/* eslint-disable react/prop-types */
import { BsGithub } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button';
import style from './Project.module.css';

const Project = (props) => {
  const { id, title, images, icons, liveDemo, gitHub } = props.details;

  return (
    <article className={`articleProject border-[1px] border-white rounded-lg ${style.projectArticle} `}>
      <img className="h-[250px] w-[300px] mt-4 rounded-lg" src={images[0]} alt="project_image" />
      <div className="flex items-center w-full justify-center h-[100px]">
        <h3 className="text-3xl font-semibold text-white text-center">{title}</h3>
      </div>
      <div className="flex justify-center gap-3 w-full h-[80px] ">
        {icons.map((icon) => {
          return (
            <IconContext.Provider key={uuidv4()} value={icon.style}>
              {icon.icon}
            </IconContext.Provider>
          );
        })}
      </div>

      <div className="">
        <div className="flex flex-col items-center text-sm font-semibold border-2 border-white bg-black rounded-3xl hover:bg-white hover:border-white hover:text-white duration-1000">
          <a href={gitHub} target="_blank" rel="noreferrer">
            <IconContext.Provider value={{ color: 'white', size: '2rem', className: 'github' }}>
              <BsGithub />
            </IconContext.Provider>
          </a>
        </div>
        <p className="text-xs text-white">GitHub</p>
      </div>

      <div className="flex items-center gap-2 mb-5">
        <Button
          name="Brief Scan"
          style={
            'px-3 py-1 text-sm font-semibold border-2 border-white rounded-3xl text-white hover:bg-white hover:border-dark-blue hover:text-dark-blue duration-700'
          }
          projectId={id}
          type={'button'}
        />

        <Button
          name="Live Demo"
          style={
            'px-3 py-1 text-sm font-semibold border-2 border-letter-blue bg-white rounded-3xl text-dark-blue hover:border-white hover:bg-transparent hover:text-white duration-700'
          }
          liveDemo={liveDemo}
          projectId={id}
          type={'button'}
        />
      </div>
    </article>
  );
};

export default Project;
