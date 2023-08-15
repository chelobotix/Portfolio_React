import { useContext } from "react";
import ContextModal from "../context/ContextModal";

const Button = (props) => {
  const { name, style, liveDemo, projectId, type } = props;

  const { modalConf, setModalConf } = useContext(ContextModal);

  const buttonType = () => {
    if (name === "Live Demo") {
      window.open(liveDemo, "_blank");
    } else if (name === "Get My Resume") {
      window.open("/files/AlarconResumeReact.docx", "_blank");
    } else if (name === "Brief Scan") {
      setModalConf({
        ...modalConf,
        visible: "",
        positionY: `${window.scrollY}`,
        projectId: projectId,
        scroll: "hidden",
        resetCarousel: true,
      });
    }
  };
  return (
    <>
      <button onClick={buttonType} className={style} type={type}>
        {name}
      </button>
    </>
  );
};

export default Button;
