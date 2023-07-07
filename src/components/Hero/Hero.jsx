import bg_img from "@/assets/images/header_bg.jpg";
import saturn from "@/assets/images/saturn.png";
import tesseract from "@/assets/images/Tesseract.gif";
import comet from "@/assets/images/comet.png";
import style from "./Hero.module.css";
const Hero = () => {
  return (
    <>
      <div
        className="flex flex-col ali justify-evenly items-center bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <img className="w-16 saturn" src={saturn} alt="" />
        <img className="w-16 comet" src={comet} alt="" />
        <p className={`text-white text-l md:text-xl lg:text-2xl italic font-monument text-center p-7 ${style.heroText}`}>
          Our Minds are more than 3 Dimensions...
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
