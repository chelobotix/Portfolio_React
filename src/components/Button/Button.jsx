import { useState } from "react";
import resumePDF from "@/assets/files/Marcelo_Alarcon_Resume.pdf";

const Button = (props) => {
  const [visible, setVisible] = useState(true);
  const { name, style, liveDemo, modalConf, setModalConf, projectId } = props;

  const buttonType = () => {
    if (name === "Live Demo") {
      window.open(liveDemo, "_blank");
    } else if (name === "Get My Resume") {
      window.open(resumePDF, "_self");
    } else {
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
      <button onClick={buttonType} className={style} type="button">
        {name}
      </button>
    </>
  );
};

export default Button;
