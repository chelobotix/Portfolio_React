import { motion } from "framer-motion";
import { DiRuby, DiHtml5, DiReact, DiCss3 } from "react-icons/di";
import Contact from "../Contact/Contact";
import CallAction from "../CallAction/CallAction";
import DownArrow from "../DownArrow/DownArrow";
import bg_img from "@/assets/images/header_bg.jpg";
import saturn from "@/assets/images/saturn.png";
import comet from "@/assets/images/comet.png";
import tesseract from "@/assets/images/Tesseract.gif";
import frame from "@/assets/images/frame1.png";
import style from "./Hero.module.css";
import "@/assets/style/animateText.css";
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
        className="flex flex-col items-center justify-center bg-cover bg-center w-screen h-screen"
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
        <div className="flex flex-col w-11/12 items-start justify-center mt-8 py-8 md:mt-16">
          <p className="animateText font-semibold italic pl-6">Welcome to my Portfolio</p>
          <h1 className="text-white font-bold  text-3xl drop-shadow-md font-monument text-left md:text-5xl md:w-[730px] 2xl:text-6xl leading-9 tracking-wider pl-6">
            I'm Marcelo
            <br />
            <span className=" md:tracking-normal 2xl:text-5xl">The Full Stack</span>
            <span className=" md:tracking-normal 2xl:text-5xl">Software Engineer</span>
          </h1>
          <div className="w-[800px]">
            <div className={`w-[600px] opacity-95 flex justify-center ${style.frame}`}>
              <div className="w-3/4">
                <p className="text-dark-pink px-1 italic text-sm mb-2 tracking-wider">A lifelong passion for PCs fuels me.</p>
                <p className="text-dark-pink pl-1 italic text-sm mb-2 tracking-wider leading-5">
                  Ready to develop and maintain efficient, clean code applications with Javascript, React, and Ruby on Rails.
                </p>
                <p className="text-dark-pink pl-1 italic text-sm mb-1 tracking-wider">I know how to make a great Pizza.</p>
                <p className="text-dark-pink pl-1 italic text-sm mb-1 tracking-wider">Open to new opportunities.</p>
              </div>
            </div>
          </div>
          <CallAction />
        </div>
        <div>
          <img className="w-28 h-auto pb-24 lg:w-40 lg:pb-2 2xl:w-48" src={tesseract} alt="Tesseract" />
        </div>
        <div>
          <p className="text-white text-l md:text-xl lg:text-2xl italic font-monument text-center animateText">
            Our Minds are more than just 3 Dimensions...
          </p>
          <div className="flex flex-col items-center justify-center">
            <Contact />
            <DownArrow color={"#ba87CA"} size={"2rem"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
