import { v4 as uuidv4 } from "uuid";
import { Fragment, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import techList from "./TechList";
import { IconContext } from "react-icons";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const headerStyle = open === 1 ? "text-white hover:text-letter-blue" : "text-letter-blue hover:text-white";

const TechAccordion = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.8 },
  };

  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(1)} className={headerStyle}>
          Languages
        </AccordionHeader>
        <AccordionBody>
          <ul className="flex justify-center gap-5">
            {techList.languages.map((tech) => {
              return (
                <li key={uuidv4()}>
                  <IconContext.Provider value={{ color: tech[1], size: "2rem" }}>
                    <div className="flex flex-col gap-1 items-center">
                      {tech[0]}
                      <p className="text-white text-xs">{tech[2]}</p>
                    </div>
                  </IconContext.Provider>
                </li>
              );
            })}
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(2)} className={headerStyle}>
          Frameworks & Libraries
        </AccordionHeader>
        <AccordionBody>
          <ul className="flex justify-center flex-wrap gap-5">
            {techList.frameworks.map((tech) => {
              return (
                <li key={uuidv4()}>
                  <IconContext.Provider value={{ color: tech[1], size: "2rem" }}>
                    <div className="flex flex-col gap-1 items-center">
                      {tech[0]}
                      <p className="text-white text-xs">{tech[2]}</p>
                    </div>
                  </IconContext.Provider>
                </li>
              );
            })}
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(3)} className={headerStyle}>
          Skills
        </AccordionHeader>
        <AccordionBody>
          <ul className="flex justify-center flex-wrap gap-5">
            {techList.skills.map((tech) => {
              return (
                <li key={uuidv4()}>
                  <IconContext.Provider value={{ color: tech[1], size: "2rem" }}>
                    <div className="flex flex-col gap-1 items-center">
                      {tech[0]}
                      <p className="text-white text-xs">{tech[2]}</p>
                    </div>
                  </IconContext.Provider>
                </li>
              );
            })}
          </ul>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
};

export default TechAccordion;
