import { useRef, useEffect } from "react";
import { IconContext } from "react-icons";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import ImageGallery from "react-image-gallery";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button";

const Modal = (props) => {
  const { modalConf, setModalConf } = props;
  const modalRef = useRef(null);

  const handleModal = () => {
    setModalConf({ ...modalConf, visible: "hidden", scroll: "auto", resetCarousel: false });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setModalConf({ ...modalConf, visible: "hidden", scroll: "auto", resetCarousel: false });
    }
  };

  useEffect(() => {
    modalRef.current.focus();
  }, [modalConf]);

  const project = modalConf.projects.find((project) => project.id === modalConf.projectId);

  document.body.style.overflow = modalConf.scroll;
  const projectImages = project.images.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });

  return (
    <div
      className={`${modalConf.visible} flex items-start justify-center w-screen h-screen overflow-y-auto backdrop-blur-sm bg-black/80 absolute z-30 p-1`}
      ref={modalRef}
      tabIndex={0}
      style={{ top: `${modalConf.positionY}px` }}
      onClick={handleModal}
      onKeyDown={handleKeyDown}
    >
      <div onClick={(e) => e.stopPropagation()} className="flex flex-col items-center">
        <p
          onClick={handleModal}
          className="text-white text-[30px] font-bold self-end p-2 hover:cursor-pointer stroke-black stroke-2"
        >
          <IconContext.Provider value={{ color: "white", className: "text-md" }}>
            <AiFillCloseCircle />
          </IconContext.Provider>
        </p>
        <h3 className="w-11/12  w-max-11/12 lg:w-3/5 xl:w-1/2 text-center text-4xl md:text-5xl font-bold text-white px-6 mb-2 rounded-md">
          {project.title}
        </h3>
        {!modalConf.resetCarousel ? (
          <div></div>
        ) : (
          <div className="w-10/12 flex justify-center ">
            <ImageGallery items={projectImages} thumbnailClass={"w-10"} />
          </div>
        )}

        <div className="flex flex-col items-center bg-dark-pink mt-5 w-10/12 lg:w-10/12  md:mb-3 opacity-95 rounded-md border-2 border-white ">
          <div className="flex flex-col items-center">
            <p className="text-ligth-pink text-lg font-semibold underline">Stack</p>
            <ul className="flex">
              {project.techs.map((tech) => (
                <IconContext.Provider key={uuidv4()} value={project.techsStyle}>
                  <li className="m-1" key={uuidv4()}>
                    {tech}
                  </li>
                </IconContext.Provider>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-ligth-pink text-lg underline font-semibold">Description</p>
            <p className="text-sm text-center italic text-white mx-4">{project.description}</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-ligth-pink text-lg underline font-semibold">Features</p>
            <ul className="flex flex-col items-center mb-5">
              {project.features.map((feature) => (
                <li className="text-sm text-white list-disc" key={uuidv4()}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 mb-3 lg:flex-row lg:gap-6 justify-center items-center">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center text-sm font-semibold border-2 border-white bg-black rounded-3xl hover:bg-white hover:border-white hover:text-white duration-1000">
                <a href={project.gitHub} target="_blank" rel="noreferrer">
                  <IconContext.Provider value={{ color: "white", size: "2rem", className: "github" }}>
                    <BsGithub />
                  </IconContext.Provider>
                </a>
              </div>
              <p className="text-xs text-white">GitHub</p>
            </div>
            <Button
              name="Live Demo"
              style={
                "px-4 py-1 text-sm font-semibold border-2 border-dark-blue bg-white rounded-3xl text-dark-blue hover:border-dark-pink hover:scale-110 ring-white ring-1 duration-200 lg:px-8 lg:py-2 lg:text-base"
              }
              liveDemo={project.liveDemo}
              type={"button"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
