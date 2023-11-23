import { v4 as uuidv4 } from 'uuid';
import techList from './TechList';
import { IconContext } from 'react-icons';
import { Motion } from './Motion';

const TechAccordion = () => {
  return (
    <article className="flex flex-col gap-5 bg-dark-blue bg-opacity-50 rounded-lg p-3 ">
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-white tracking-wider text-lg underline">Languages</h3>
        <Motion>
          <ul className="flex justify-center gap-5">
            {techList.languages.map((tech) => {
              return (
                <li key={uuidv4()}>
                  <IconContext.Provider value={{ color: tech[1], size: '3rem' }}>
                    <div className="flex flex-col gap-1 items-center">
                      {tech[0]}
                      <p className="text-white text-xs">{tech[2]}</p>
                    </div>
                  </IconContext.Provider>
                </li>
              );
            })}
          </ul>
        </Motion>
      </div>

      <hr className="h-[1px] w-full bg-white border-0 my-4" />

      <div className="flex flex-col items-center gap-3">
        <h3 className="text-white tracking-wider text-lg underline">Frameworks & Libraries</h3>
        <Motion>
          <ul className="flex justify-center flex-wrap gap-5">
            {techList.frameworks.map((tech) => {
              return (
                <li key={uuidv4()}>
                  <IconContext.Provider value={{ color: tech[1], size: '3rem' }}>
                    <div className="flex flex-col gap-1 items-center">
                      {tech[0]}
                      <p className="text-white text-xs">{tech[2]}</p>
                    </div>
                  </IconContext.Provider>
                </li>
              );
            })}
          </ul>
        </Motion>
      </div>

      <hr className="h-[1px] w-full bg-white border-0 my-4" />

      <div className="flex flex-col items-center gap-3">
        <h3 className="text-white tracking-wider text-lg underline">Skills</h3>
        <Motion>
          <ul className="flex justify-center flex-wrap gap-5">
            {techList.skills.map((tech) => {
              return (
                <li key={uuidv4()}>
                  <IconContext.Provider value={{ color: tech[1], size: '3rem' }}>
                    <div className="flex flex-col gap-1 items-center">
                      {tech[0]}
                      <p className="text-white text-xs">{tech[2]}</p>
                    </div>
                  </IconContext.Provider>
                </li>
              );
            })}
          </ul>
        </Motion>
      </div>
    </article>
  );
};

export default TechAccordion;
