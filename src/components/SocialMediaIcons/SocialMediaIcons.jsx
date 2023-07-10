import { IconContext } from "react-icons";
import { FaTwitter, FaLinkedinIn, FaGithub, FaMedium, FaAngellist } from "react-icons/fa";

const SocialMediaIcons = (props) => {
  const { color, size } = props;
  return (
    <>
      <li>
        <IconContext.Provider value={{ color: color, size: size }}>
          <a href="https://twitter.com/marcealarconb">
            <FaTwitter />
          </a>
        </IconContext.Provider>
      </li>
      <li>
        <IconContext.Provider value={{ color: color, size: size }}>
          <a href="https://www.linkedin.com/in/marceloalarconb/">
            <FaLinkedinIn />
          </a>
        </IconContext.Provider>
      </li>
      <li>
        <IconContext.Provider value={{ color: color, size: size }}>
          <a href="https://chelobotix.github.io/Portafolio-Website/images/github.svg">
            <FaGithub />
          </a>
        </IconContext.Provider>
      </li>
      <li>
        <IconContext.Provider value={{ color: color, size: size }}>
          <a href="https://medium.com/@marceloalarconbarrenechea">
            <FaMedium />
          </a>
        </IconContext.Provider>
      </li>
      <li>
        <IconContext.Provider value={{ color: color, size: size }}>
          <a href="https://wellfound.com/u/marceloalarconb">
            <FaAngellist />
          </a>
        </IconContext.Provider>
      </li>
    </>
  );
};

export default SocialMediaIcons;
