import { useContext } from "react";
import resumePDF from "@/assets/files/Marcelo_Alarcon_Resume.pdf";
import ContextModal from "../context/ContextModal";

const Button = (props) => {
  const { name, style, liveDemo, projectId, type } = props;

  const data = useContext(ContextModal);

  const buttonType = () => {
    if (name === "Live Demo") {
      window.open(liveDemo, "_blank");
    } else if (name === "Get My Resume") {
      window.open(resumePDF, "_blank");
    } else if (name === "Brief Scan") {
      data.setModalConf({
        ...data.modalConf,
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
