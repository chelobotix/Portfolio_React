import project1 from "@/assets/images/venom_precision.jpg";
import project2 from "@/assets/images/reggae_concert.jpg";
import project3 from "@/assets/images/roman.jpg";
import project4 from "@/assets/images/awesome_books.jpg";
import project5 from "@/assets/images/todolist.jpg";
import project6 from "@/assets/images/leaderboard.jpg";
import project7 from "@/assets/images/bookstore.jpg";
import project8 from "@/assets/images/spacetravelers.jpg";
import project9 from "@/assets/images/retrowatchers.jpg";
import project10 from "@/assets/images/schoollibrary.jpg";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiRubyonrails, SiRedux, SiWebpack } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiRuby } from "react-icons/di";
import { TbApi } from "react-icons/tb";

const projectList = [
  {
    title: "Venom Precision",
    image: project1,
    description:
      "Venom Precision Paintball Website: Your go-to source for all things paintball! Explore our extensive collection of articles.",
    techs: [<FaReact />, <SiRubyonrails />, <IoLogoJavascript />],
    techsStyle: { color: "white", size: "1.5rem" },
    icon: <SiRubyonrails />,
    iconStyle: { color: "red", size: "2rem" },
  },
  {
    title: "Roman Emperors",
    image: project3,
    description:
      "Venom Precision Paintball Website: Your go-to source for all things paintball! Explore our extensive collection of articles.",
    techs: [<FaReact />, <SiRedux />, <TbApi />],
    techsStyle: { color: "white", size: "1.5rem" },
    icon: <FaReact />,
    iconStyle: { color: "5ED3F3", size: "2rem" },
  },
  {
    title: "Reggae Concert",
    image: project2,
    description:
      "Venom Precision Paintball Website: Your go-to source for all things paintball! Explore our extensive collection of articles.",
    techs: [<FaCss3Alt />, <FaHtml5 />, <IoLogoJavascript />],
    techsStyle: { color: "white", size: "1.5rem" },
    icon: <IoLogoJavascript />,
    iconStyle: { color: "orange", size: "2rem" },
  },
  {
    title: "Awesome Books",
    image: project4,
    description:
      "Awesome Books is a dynamic JavaScript-based SPA that empowers users to effortlessly add and beautifully display their favorite books.",
    techs: [<FaCss3Alt />, <FaHtml5 />, <IoLogoJavascript />],
    techsStyle: { color: "white", size: "1.5rem" },
    icon: <IoLogoJavascript />,
    iconStyle: { color: "orange", size: "2rem" },
  },
  {
    title: "To Do List",
    image: project5,
    description:
      "To Do List is a App that let you Create, Display, Delete and Update tasks and store them on Local Storage. It's a Single Page Application that has been bundled with Webpack.",
    techs: [<FaCss3Alt />, <FaHtml5 />, <IoLogoJavascript />, <SiWebpack />],
    techsStyle: { color: "white", size: "1.5rem" },
    icon: <SiWebpack />,
    iconStyle: { color: "75AFCC", size: "2rem" },
    liveDemo: "https://chelobotix.github.io/To-Do-List-Barrenechea/dist/",
    gitHub: "https://github.com/chelobotix/To-Do-List-Barrenechea",
  },
  {
    title: "Leader Board",
    image: project6,
    description:
      "Leaderboard Lord of the Rings: A modular JavaScript and Webpack-powered website for tracking and displaying player scores. Add scores, witness the rankings, and embrace the competitive spirit of Middle-earth, all in one sleek interface.",
    techs: [<FaCss3Alt />, <FaHtml5 />, <IoLogoJavascript />, <SiWebpack />, <TbApi />],
    techsStyle: { color: "white", size: "1.5rem" },
    icon: <SiWebpack />,
    iconStyle: { color: "75AFCC", size: "2rem" },
    liveDemo: "https://chelobotix.github.io/Leaderboard-Chelobotix/dist/",
    gitHub: "https://github.com/chelobotix/Leaderboard-Chelobotix",
  },
  {
    title: "Book Store",
    image: project7,
    description: "With BookStore you can add your favorite books and track your progress as you read them.",
    techs: [<FaReact />, <SiRedux />, <TbApi />],
    techsStyle: { color: "white", size: "1.5rem" },
    icon: <FaReact />,
    iconStyle: { color: "5ED3F3", size: "2rem" },
    liveDemo: "https://fascinating-cat-ad9483.netlify.app",
    gitHub: "https://github.com/chelobotix/Book-Store-Chelobotix",
  },
  {
    title: "Space Travelers' Hub",
    image: project8,
    description:
      "Check out the SpaceX rockets in detail and have the opportunity to make a reservation to travel in one of them.",
    techs: [<FaReact />, <SiRedux />, <TbApi />],
    techsStyle: { color: "white", size: "1.5rem" },
    icon: <FaReact />,
    iconStyle: { color: "5ED3F3", size: "2rem" },
    liveDemo: "https://friendly-axolotl-ffabbd.netlify.app/",
    gitHub: "https://github.com/chelobotix/Space-Travelers-Hub",
  },
  {
    title: "Retro Watchers",
    image: project9,
    description:
      "A '90s-inspired movie website showcasing all the nostalgic classics. Powered by an external API, it brings you detailed information on your favorite films.",
    techs: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />],
    techsStyle: { color: "white", size: "1.5rem" },
    icon: <IoLogoJavascript />,
    iconStyle: { color: "orange", size: "2rem" },
    liveDemo: "https://thunderous-dasik-81b884.netlify.app/",
    gitHub: "https://github.com/chelobotix/Retro-Watchers-Capstone",
  },
  {
    title: "School Library",
    image: project10,
    description:
      "Experience a streamlined School Library web site built using Ruby, boasting a terminal interface. Effortlessly manage books and people through efficient CRUD operations, ensuring smooth functionality for users.",
    techs: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />],
    techsStyle: { color: "white", size: "1.5rem" },
    icon: <DiRuby />,
    iconStyle: { color: "red", size: "1.8rem" },
    liveDemo: "https://github.com/chelobotix/school-library",
    gitHub: "https://github.com/chelobotix/school-library",
  },
];

export default projectList;
