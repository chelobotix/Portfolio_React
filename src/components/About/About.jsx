import '@/assets/style/animateText.css';
import Button from '../Button/Button';
import TechAccordion from '../TechAccordion/TechAccordion';
import chelo from '@/assets/images/chelo.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="flex flex-col items-center gap-3 bg-dark-blue bg-opacity-70 p-6">
        <h2 className="text-white text-4xl font-bold lg:text-5xl">About</h2>
        <div className="flex flex-col items-center gap-3">
          <img src={chelo} alt="" className="w-28 h-32 lg:w-40 lg:h-48 border-2 border-white" />
          <p className="text-white text-center md:text-[18px] leading-loose tracking-wider p-2">
            Hello! 👋 I&apos;m efficient in crafting robust solutions with Ruby on Rails and React. I thrive in collaborative team environments,
            always eager to bring innovation to product, a feature, or a website. I love turning ideas into reality. Take a look at some of my
            projects and experiences. If you find them intriguing and have a coding project on your mind, feel free to reach out. I&apos;m here to
            bring your ideas to life! 🚀✨
          </p>
        </div>
        <Button
          name="Get My Resume"
          style={
            'px-4 py-1 text-lg font-semibold border-2 border-white rounded-3xl text-white hover:bg-letter-blue hover:border-white hover:text-dark-blue m-8 duration-300'
          }
        />
        <hr className="h-[1px] w-full bg-white border-0 mb-9" />
        <TechAccordion />
      </div>
    </section>
  );
};

export default About;
