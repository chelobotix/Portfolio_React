import { useContext } from "react";
import resume from "@/assets/files/AlarconResumeReact.docx";
import ContextModal from "../context/ContextModal";

const Button = (props) => {
  const { name, style, liveDemo, projectId, type } = props;

  const { modalConf, setModalConf } = useContext(ContextModal);

  const buttonType = () => {
    if (name === "Live Demo") {
      window.open(liveDemo, "_blank");
    } else if (name === "Get My Resume") {
      window.open(resume, "_blank");
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
