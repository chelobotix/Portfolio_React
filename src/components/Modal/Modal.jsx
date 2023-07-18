import { Carousel } from "@material-tailwind/react";

const Modal = (props) => {
  console.log(props);
  const { modalConf, setModalConf } = props;
  const handleModal = () => {
    setModalConf({ ...modalConf, visible: "hidden" });
  };

  console.log(modalConf.positionY);
  return (
    <div
      className={`${modalConf.visible}  w-screen h-screen  backdrop-blur-sm bg-white/50 absolute z-30`}
      style={{ top: `${modalConf.positionY}px` }}
    >
      <div className="flex flex-col items-center">
        <p onClick={handleModal} className="text-white text-xl font-bold self-end p-2">
          X
        </p>
        <p className="text-3xl font-bold text-dark-blue">MODAL</p>
        <Carousel className="h-50 w-50 rounded-lg m-2">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-64 w-50 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-64 w-50 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-64 w-50 object-cover"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Modal;
