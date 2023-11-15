/* eslint-disable react/prop-types */
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconContext } from 'react-icons';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button';
import style from './Project.module.css';
import Chip from '@mui/material/Chip';

const Project = (props) => {
  const { id, title, images, icons, liveDemo, gitHub } = props.details;
  const handleClick = (url) => {
    window.open(url, '_self');
  };
  return (
    <article className={`articleProject shadowProject border-[1px] border-white rounded-lg ${style.projectArticle} `}>
      <img className="h-[250px] w-[300px] mt-4 rounded-lg" src={images[0]} alt="project_image" />

      <div className="flex flex-col gap-2 items-center w-full justify-center h-[100px]">
        <h3 className="text-3xl font-semibold text-white text-center">{title}</h3>
        <ul className="flex gap-2">
          {gitHub.map((url, index) => (
            <li key={uuidv4()}>
              <Chip
                icon={<GitHubIcon style={{ color: '#ffffff' }} />}
                style={{ color: '#ffffff', padding: '0 10px' }}
                variant="outlined"
                size="small"
                label={index === 0 ? 'Front-end' : 'Back-end'}
                onClick={() => handleClick(url)}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center gap-3 w-full h-[80px]  ">
        {icons.map((icon) => {
          return (
            <IconContext.Provider key={uuidv4()} value={icon.style}>
              <div className={`rounded-lg p-1 border-[1px] border-white shadowProject`} style={{ backgroundColor: icon.bg }}>
                {icon.icon}
              </div>
            </IconContext.Provider>
          );
        })}
      </div>

      <div className="flex items-center gap-2 mb-5">
        <Button
          name="Fast Inspection"
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
