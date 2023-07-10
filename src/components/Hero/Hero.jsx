import bg_img from "@/assets/images/header_bg.jpg";
import saturn from "@/assets/images/saturn.png";
import comet from "@/assets/images/comet.png";
import tesseract from "@/assets/images/Tesseract.gif";
import gaia from "@/assets/images/gaia.png";
import style from "./Hero.module.css";
import { motion } from "framer-motion";
const Hero = () => {
  let cometAnimationDuration = {};
  let cometCoordiante = { from: {}, to: {} };

  const animateComet = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 769) {
      cometAnimationDuration = { duration: 20, repeat: Infinity, repeatDelay: 10 };
      cometCoordiante.from = { x: "100vw", y: -150 };
      cometCoordiante.to = { x: "-100vw", y: -350 };
    } else {
      cometAnimationDuration = { duration: 30, repeat: Infinity, repeatDelay: 10 };
      cometCoordiante.from = { x: "100vw", y: 0 };
      cometCoordiante.to = { x: "-100vw", y: -380 };
    }
  };
  animateComet();

  return (
    <>
      <div
        className="flex flex-col ali justify-evenly items-center bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <img className={`w-16 lg:w-28 2xl:w-44 ${style.saturn} ${style.gravity} `} src={saturn} alt="" />
        <motion.div
          className="w-16 w-min-16 fixed z-10 lg:w-24"
          initial={cometCoordiante.from}
          animate={cometCoordiante.to}
          transition={cometAnimationDuration}
        >
          <img src={comet} alt="" />
        </motion.div>
        <p className={`text-white text-l md:text-xl lg:text-2xl italic font-monument text-center p-7 ${style.heroText}`}>
          Our Minds are more than just 3 Dimensions...
        </p>
        <img className="w-28 h-auto pb-24 lg:w-40 lg:pb-36 2xl:w-48" src={tesseract} alt="Tesseract" />
        <h1 className="text-white font-bold tracking-tighter text-4xl drop-shadow-md font-monument text-center md:text-5xl 2xl:text-6xl">
          I'm Marcelo
          <br />
          <span className="italic fz-28 md:tracking-normal 2xl:text-5xl">Full Stack Software Engineer</span>
        </h1>
      </div>
    </>
  );
};

export default Hero;
