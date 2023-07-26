import { v4 as uuidv4 } from "uuid";
import { Carousel, IconButton } from "@material-tailwind/react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";
import Button from "../Button/Button";

const Modal = (props) => {
  const { modalConf, setModalConf } = props;

  const handleModal = () => {
    setModalConf({ ...modalConf, visible: "hidden", scroll: "auto", resetCarousel: false });
  };

  const project = modalConf.projects.find((project) => project.id === modalConf.projectId);
  document.body.style.overflow = modalConf.scroll;

  return (
    <div
      className={`${modalConf.visible} flex items-start w-screen h-screen overflow-y-auto backdrop-blur-sm bg-white/50 absolute z-30`}
      style={{ top: `${modalConf.positionY}px` }}
    >
      <div className="flex flex-col gap-1 items-center ">
        <p
          onClick={handleModal}
          className="text-dark-blue text-3xl font-bold self-end px-2 hover:animate-pulse hover:cursor-pointer"
        >
          x
        </p>
        <h3 className="w-11/12  w-max-11/12 lg:w-3/5 xl:w-1/2 text-center text-3xl font-bold text-letter-blue bg-black opacity-60 px-6 mb-2 rounded-md">
          {project.title}
        </h3>
        {!modalConf.resetCarousel ? (
          <div></div>
        ) : (
          <Carousel
            className="h-auto w-11/12 xl:w-2/4 rounded-lg m-2"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="blue"
                size="md"
                onClick={handlePrev}
                className="!absolute top-2/4 -translate-y-2/4 left-4"
              >
                <IconContext.Provider value={{ color: "#b1bcfe", size: "2rem" }}>
                  <BsFillArrowLeftCircleFill />
                </IconContext.Provider>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="blue"
                size="md"
                onClick={handleNext}
                className="!absolute top-2/4 -translate-y-2/4 !right-4"
              >
                <IconContext.Provider value={{ color: "#b1bcfe", size: "2rem" }}>
                  <BsFillArrowRightCircleFill />
                </IconContext.Provider>
              </IconButton>
            )}
          >
            {project.images.map((img) => (
              <img
                key={uuidv4()}
                src={img}
                alt={`image of ${project.title}`}
                className="object-cover border-4 border-letter-blue rounded-xl"
              />
            ))}
          </Carousel>
        )}
        <div className="flex flex-col items-center bg-dark-blue w-11/12 max-w-[900px] lg:w-9/12  mb-1 opacity-80 rounded-md ring-1 ring-white">
          <p className="text-ligth-pink font-semibold">Stack</p>
          <ul className="flex">
            {project.techs.map((tech) => (
              <IconContext.Provider key={uuidv4()} value={project.techsStyle}>
                <li className="m-1" key={uuidv4()}>
                  {tech}
                </li>
              </IconContext.Provider>
            ))}
          </ul>
          <hr className="w-48 h-1 mx-auto my-2 md:my-1 bg-gray-100 border-0 rounded  dark:bg-gray-700"></hr>

          <p className="text-ligth-pink font-semibold">Description</p>
          <p className="text-sm text-center text-white mx-4">{project.description}</p>
          <hr className="w-48 h-1 mx-auto md:my-1 bg-gray-100 border-0 rounded  dark:bg-gray-700"></hr>

          <p className="text-ligth-pink font-semibold">Features</p>
          <ul className="flex flex-col items-center mb-5">
            {project.features.map((feature) => (
              <li className="text-sm text-white list-disc" key={uuidv4()}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2 mt-4 ">
          <Button
            name="Live Demo"
            style={
              "px-4 py-1 text-sm font-semibold border-2 border-letter-blue bg-letter-blue rounded-3xl text-dark-blue hover:border-white ring-white ring-1 "
            }
            liveDemo={project.liveDemo}
            type={"button"}
          />
        </div>
        <div className="flex flex-col items-center my-3">
          <a href={project.gitHub} target="_blank">
            <IconContext.Provider value={{ color: "black", size: "2rem" }}>
              <BsGithub />
            </IconContext.Provider>
          </a>
          <p className="font-semibold text-sm">GitHub Repo</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
