import { useRef, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { AiFillCloseCircle } from 'react-icons/ai';
import ImageGallery from 'react-image-gallery';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button';
import { Button as MButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Modal = (props) => {
  const { modalConf, setModalConf } = props;
  const modalRef = useRef(null);

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  const handleModal = () => {
    setModalConf({ ...modalConf, visible: 'hidden', scroll: 'auto', resetCarousel: false });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setModalConf({ ...modalConf, visible: 'hidden', scroll: 'auto', resetCarousel: false });
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
        <p onClick={handleModal} className="text-white text-[30px] font-bold self-end p-2 hover:cursor-pointer stroke-black stroke-2">
          <IconContext.Provider value={{ color: 'white', className: 'text-md' }}>
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
            <ImageGallery items={projectImages} thumbnailClass={'w-10'} />
          </div>
        )}

        <div className="flex flex-col items-center gap-4 bg-indigo-700 bg-opacity-80 mt-5 w-11/12 lg:w-10/12  md:mb-3 opacity-95 rounded-md ">
          <div className="flex flex-col gap-3 items-center w-full">
            <p className="text-white text-3xl font-semibold underline">Stack</p>
            <ul className="flex justify-center gap-2 w-full  border-y-2 py-3">
              {project.icons.map((icon) => {
                return (
                  <IconContext.Provider key={uuidv4()} value={icon.style}>
                    <div className={`rounded-lg p-1 border-[1px] border-white shadowProject`} style={{ backgroundColor: icon.bg }}>
                      {icon.icon}
                    </div>
                  </IconContext.Provider>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <p className="text-white text-3xl font-semibold underline">Description</p>
            <p className="text-sm font-extralight text-center italic text-blue-gray-100 mx-4 tracking-wider leading-6	">{project.description}</p>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <p className="text-white text-3xl font-semibold underline">Features</p>
            <ul className="flex flex-col gap-3 pl-5">
              {project.features.map((feature) => (
                <li className="text-sm font-extralight text-blue-gray-100 list-disc" key={uuidv4()}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 mb-3 lg:gap-6 justify-center items-center">
            <ul className="flex gap-3">
              {project.gitHub.map((url, index) => (
                <li key={uuidv4()}>
                  <MButton
                    startIcon={<GitHubIcon style={{ color: '#ffffff' }} />}
                    endIcon={<LaunchIcon style={{ color: '#ffffff' }} />}
                    style={{ color: '#ffffff', padding: '0 10px', textTransform: 'none' }}
                    variant="outlined"
                    size="small"
                    onClick={() => handleClick(url)}
                  >
                    {index === 0 ? 'Front-end' : 'Back-end'}
                  </MButton>
                </li>
              ))}
            </ul>
            <Button
              name="Live Demo"
              style={
                'px-4 py-1 text-sm font-semibold border-[1px] border-blue-400 rounded-lg text-white hover:border-blue-600 hover:scale-110 duration-200 lg:px-8 lg:py-2 lg:text-base'
              }
              liveDemo={project.liveDemo}
              type={'button'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
