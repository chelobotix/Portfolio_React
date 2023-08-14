import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import { HashLink as Link } from "react-router-hash-link";

const handleScroll = (setStyle) => {
  if (window.scrollY > 776) {
    setStyle("visible");
  } else {
    setStyle("invisible");
  }
};

const ScrollToTopButton = () => {
  const [style, setStyle] = useState("invisible");

  useEffect(() => {
    window.addEventListener("scroll", function () {
      handleScroll(setStyle);
    });

    return () => {
      window.removeEventListener("scroll", function () {
        console.log("remove");
        handleScroll(setStyle);
      });
    };
  }, []);

  return (
    <div className={`${style} bg-white border-2 mr-1 border-dark-blue opacity-80 p-1 rounded-full fixed top-[93%] right-0`}>
      <Link to="/#hero">
        <IconContext.Provider value={{ color: "#151666", className: "text-4xl" }}>
          <TbArrowBigUpLinesFilled />
        </IconContext.Provider>
      </Link>
    </div>
  );
};

export default ScrollToTopButton;
