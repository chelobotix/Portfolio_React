import { useRef } from "react";

const Button = (props) => {
  const { name, style, liveDemo, modalConf, setModalConf, projectId } = props;
  const btnRef = useRef(null);

  const buttonType = () => {
    if (name === "Live Demo") {
      window.open(liveDemo, "_blank");
    } else {
      setModalConf({ ...modalConf, visible: "", positionY: `${window.scrollY}`, projectId: projectId, scroll: "hidden" });
    }
  };
  return (
    <>
      <button ref={btnRef} onClick={buttonType} className={style} type="button">
        {name}
      </button>
    </>
  );
};

export default Button;
