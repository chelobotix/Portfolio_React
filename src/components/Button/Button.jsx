import { useState } from "react";
import resumePDF from "@/assets/files/Marcelo_Alarcon_Resume.pdf";

const Button = (props) => {
  const [visible, setVisible] = useState(true);
  const { name, style, liveDemo, modalConf, setModalConf, projectId, type } = props;

  const buttonType = () => {
    if (name === "Live Demo") {
      window.open(liveDemo, "_blank");
    } else if (name === "Get My Resume") {
      window.open(resumePDF, "_blank");
    } else if (name === "More...") {
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
