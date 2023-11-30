import { motion } from 'framer-motion';
import Contact from '../Contact/Contact';
import CallAction from '../CallAction/CallAction';
import bg_img from '@/assets/images/header_bg.jpg';
import saturn from '@/assets/images/saturn.png';
import comet from '@/assets/images/comet.png';
import tesseract from '@/assets/images/Tesseract.gif';
import style from './Hero.module.css';
import '@/assets/style/animateText.css';
const Hero = () => {
  let cometAnimationDuration = {};
  let cometCoordiante = { from: {}, to: {} };

  const animateComet = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 769) {
      cometAnimationDuration = { duration: 20, repeat: Infinity, repeatDelay: 10 };
      cometCoordiante.from = { x: '100vw', y: -150 };
      cometCoordiante.to = { x: '-100vw', y: -350 };
    } else {
      cometAnimationDuration = { duration: 30, repeat: Infinity, repeatDelay: 10 };
      cometCoordiante.from = { x: '100vw', y: 0 };
      cometCoordiante.to = { x: '-100vw', y: -380 };
    }
  };
  animateComet();

  return (
    <>
      <div
        id="hero"
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
        <div className="flex flex-col items-center w-11/12 mt-20">
          <h1 className="text-white   text-3xl md:text-4xl xl:text-5xl drop-shadow-md text-center leading-9 tracking-wider pl-6">
            I&#39;m Marcelo
            <p className=" md:tracking-normal text-2xl md:text-3xl xl:text-4xl">Full Stack</p>
            <p className=" md:tracking-normal text-2xl md:text-3xl xl:text-4xl">Software Developer</p>
          </h1>

          <div className="w-full flex justify-center">
            <div className={`opacity-[0.85] flex justify-center ${style.frame}`}>
              <div className="w-9/12">
                <p className="text-dark-pink px-1 italic text-sm mb-2 tracking-wider text-center">A lifelong passion for PCs fuels me.</p>
                <p className="text-dark-pink pl-1 italic text-sm mb-2 tracking-wider leading-5 text-center">
                  Ready to develop and maintain efficient, clean code applications with{' '}
                  <span className="underline">Javascript, React, and Ruby on Rails.</span>
                </p>
                <p className="text-dark-pink pl-1 italic text-sm mb-1 tracking-wider text-center">
                  I also know how to make a great <span className="underline">Pizza.</span>
                </p>
                <p className="text-dark-pink pl-1 italic text-sm mb-1 tracking-wider text-center">Open to new opportunities.</p>
              </div>
            </div>
          </div>

          <CallAction />
        </div>
        <div>
          <img className="w-28 h-auto lg:w-36 lg:pb-2" src={tesseract} alt="Tesseract" />
        </div>
        <div>
          <p className="text-white text-l md:text-xl lg:text-2xl italic font-monument text-center animateText">
            Our Minds are more than just 3 Dimensions...
          </p>
          <div className="flex flex-col items-center justify-center">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
