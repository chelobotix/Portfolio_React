import { IconContext } from "react-icons";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import style from "./DownArrow.module.css";

const DownArrow = (props) => {
  const { color, size } = props;
  return (
    <div className={`mt-5 ${style.animation}`}>
      <IconContext.Provider value={{ color: color, size: size }}>
        <a href="https://twitter.com/marcealarconb">
          <FaRegArrowAltCircleDown />
        </a>
      </IconContext.Provider>
    </div>
  );
};

export default DownArrow;
