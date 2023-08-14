import { IconContext } from "react-icons";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";

const handleScroll = () => {};

const ScrollToTopButton = () => {
  return (
    <div
      className="bg-white border-2 border-dark-blue opacity-80 p-1 rounded-full fixed top-[93%] left-[85%]"
      onClick={handleScroll}
    >
      <IconContext.Provider value={{ color: "#151666", className: "text-4xl" }}>
        <TbArrowBigUpLinesFilled />
      </IconContext.Provider>
    </div>
  );
};

export default ScrollToTopButton;
