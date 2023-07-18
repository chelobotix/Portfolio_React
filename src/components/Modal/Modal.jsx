import { v4 as uuidv4 } from "uuid";
import { Carousel, IconButton } from "@material-tailwind/react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";

const Modal = (props) => {
  const { modalConf, setModalConf } = props;
  const handleModal = () => {
    setModalConf({ ...modalConf, visible: "hidden" });
  };

  const project = modalConf.projects.find((project) => project.id === modalConf.projectId);

  return (
    <div
      className={`${modalConf.visible}  w-screen h-screen  backdrop-blur-sm bg-white/50 absolute z-30`}
      style={{ top: `${modalConf.positionY}px` }}
    >
      <div className="flex flex-col items-center">
        <p onClick={handleModal} className="text-dark-blue text-3xl font-bold self-end p-2">
          x
        </p>
        <h3 className="w-11/12 w-max-11/12 text-center text-3xl font-bold text-letter-blue bg-black opacity-60 px-6 mb-2 rounded-md">
          {project.title}
        </h3>
        <Carousel
          className="h-50 w-50 rounded-lg m-2"
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
              className="h-64 w-full object-cover border-4 border-letter-blue rounded-xl"
            />
          ))}
        </Carousel>
        <div className="flex justify-center items-center  w-full h-[150px] m-1  ">
          <p className="font-bold w-11/12 w-max-11/12  text-center text-letter-blue bg-black opacity-60 rounded-md mx-2 py-4">
            {project.description}
          </p>
        </div>
        <div className="m-7">
          <a href={project.gitHub}>
            <IconContext.Provider value={{ color: "black", size: "3.5rem" }}>
              <BsGithub />
            </IconContext.Provider>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
