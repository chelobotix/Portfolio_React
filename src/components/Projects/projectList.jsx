import awesome1 from "@/assets/images/awesome_books1-min.jpg";
import awesome2 from "@/assets/images/awesome_books2-min.jpg";
import awesome3 from "@/assets/images/awesome_books3-min.jpg";
import awesome4 from "@/assets/images/awesome_books4-min.jpg";
import bookStore1 from "@/assets/images/book_store1-min.jpg";
import bookStore2 from "@/assets/images/book_store2-min.jpg";
import leaderboard1 from "@/assets/images/leaderboard1-min.jpg";
import leaderboard2 from "@/assets/images/leaderboard2-min.jpg";
import leaderboard3 from "@/assets/images/leaderboard3-min.jpg";
import reggaeConcert1 from "@/assets/images/Reggae_concert1-min.jpg";
import reggaeConcert2 from "@/assets/images/Reggae_concert2-min.jpg";
import reggaeConcert3 from "@/assets/images/Reggae_concert3-min.jpg";
import reggaeConcert4 from "@/assets/images/Reggae_concert4-min.jpg";
import retroWatchers1 from "@/assets/images/retro_watchers1-min.jpg";
import retroWatchers2 from "@/assets/images/retro_watchers2-min.jpg";
import retroWatchers3 from "@/assets/images/retro_watchers3-min.jpg";
import retroWatchers4 from "@/assets/images/retro_watchers4-min.jpg";
import romanEmperors1 from "@/assets/images/roman_emperors1-min.jpg";
import romanEmperors2 from "@/assets/images/roman_emperors2-min.jpg";
import romanEmperors3 from "@/assets/images/roman_emperors3-min.jpg";
import schoolLibrary1 from "@/assets/images/school_library1-min.jpg";
import schoolLibrary2 from "@/assets/images/school_library2-min.jpg";
import schoolLibrary3 from "@/assets/images/school_library3-min.jpg";
import spaceTravelers1 from "@/assets/images/space_travelers1-min.jpg";
import spaceTravelers2 from "@/assets/images/space_travelers2-min.jpg";
import spaceTravelers3 from "@/assets/images/space_travelers3-min.jpg";
import todoList1 from "@/assets/images/todolist1-min.jpg";
import todoList2 from "@/assets/images/todolist2-min.jpg";
import todoList3 from "@/assets/images/todolist3-min.jpg";
import venomPrecision1 from "@/assets/images/venom_precision2-min.jpg";
import venomPrecision2 from "@/assets/images/venom_precision1-min.jpg";
import venomPrecision3 from "@/assets/images/venom_precision3-min.jpg";
import venomPrecision4 from "@/assets/images/venom_precision4-min.jpg";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiRubyonrails, SiRedux, SiWebpack } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiRuby } from "react-icons/di";
import { TbApi } from "react-icons/tb";

const projectList = [
  {
    id: 1,
    title: "Venom Precision",
    images: [venomPrecision1, venomPrecision2, venomPrecision3, venomPrecision4],
    description:
      "Venom Precision Paintball Website: Your go-to source for all things paintball! Explore our extensive collection of articles.",
    techs: [<FaReact />, <SiRubyonrails />, <IoLogoJavascript />],
    techsStyle: { color: "white", size: "1.5rem" },
    icon: <SiRubyonrails />,
    iconStyle: { color: "C6322C", size: "2rem" },
    liveDemo: "https://velvety-genie-9ab88d.netlify.app/",
    gitHub: "https://github.com/chelobotix/VenomPrecision-back-end",
  },
  {
    id: 2,
    title: "Roman Emperors",
    images: [romanEmperors1, romanEmperors2, romanEmperors3],
    description:
      "Dive into the fascinating history of the Roman Empire through our comprehensive website. Built using React and Redux, our platform offers a seamless user experience with our API connection.",
    techs: [<FaReact />, <SiRedux />, <TbApi />],
    techsStyle: { color: "white", size: "1.5rem" },
    icon: <FaReact />,
    iconStyle: { color: "5ED3F3", size: "2rem" },
    liveDemo: "https://illustrious-rolypoly-9106b9.netlify.app/",
    gitHub: "https://github.com/chelobotix/To-Do-List-Barrenechea",
  },
  {
    id: 3,
    title: "Reggae Concert",
    images: [reggaeConcert1, reggaeConcert2, reggaeConcert3, reggaeConcert4],
    description:
      "Venom Precision Paintball Website: Your go-to source for all things paintball! Explore our extensive collection of articles.",
    techs: [<FaCss3Alt />, <FaHtml5 />, <IoLogoJavascript />],
    techsStyle: { color: "white", size: "1.5rem" },
    icon: <IoLogoJavascript />,
    iconStyle: { color: "EFD81D", size: "2rem" },
    liveDemo: "https://chelobotix.github.io/Capstone-project-Protoje-concert/",
    gitHub: "https://github.com/chelobotix/Capstone-project-Protoje-concert",
  },
  {
    id: 4,
    title: "Awesome Books",
    images: [awesome1, awesome2, awesome3, awesome4],
    description:
      "Awesome Books is a dynamic JavaScript-based SPA that empowers users to effortlessly add and beautifully display their favorite books.",
    techs: [<FaCss3Alt />, <FaHtml5 />, <IoLogoJavascript />],
    techsStyle: { color: "white", size: "1.5rem" },
    icon: <IoLogoJavascript />,
    iconStyle: { color: "EFD81D", size: "2rem" },
    liveDemo: "https://chelobotix.github.io/Awesome_Book/",
    gitHub: "https://github.com/chelobotix/Awesome_Book",
  },
  {
    id: 5,
    title: "To Do List",
    images: [todoList1, todoList2, todoList3],
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
    id: 6,
    title: "Leader Board",
    images: [leaderboard1, leaderboard2, leaderboard3],
    description:
      "Leaderboard Lord of the Rings: A modular JavaScript and Webpack-powered website for tracking and displaying player scores. Embrace the competitive spirit of Middle-earth.",
    techs: [<FaCss3Alt />, <FaHtml5 />, <IoLogoJavascript />, <SiWebpack />, <TbApi />],
    techsStyle: { color: "white", size: "1.5rem" },
    icon: <SiWebpack />,
    iconStyle: { color: "75AFCC", size: "2rem" },
    liveDemo: "https://whimsical-peony-71ff5a.netlify.app/",
    gitHub: "https://github.com/chelobotix/Leaderboard-Chelobotix",
  },
  {
    id: 7,
    title: "Book Store",
    images: [bookStore1, bookStore2],
    description:
      "If you love to read with BookStore App you can add your favorite books and track your progress as you read them.",
    techs: [<FaReact />, <SiRedux />, <TbApi />],
    techsStyle: { color: "white", size: "1.5rem" },
    icon: <FaReact />,
    iconStyle: { color: "5ED3F3", size: "2rem" },
    liveDemo: "https://fascinating-cat-ad9483.netlify.app",
    gitHub: "https://github.com/chelobotix/Book-Store-Chelobotix",
  },
  {
    id: 8,
    title: "Space Travelers' Hub",
    images: [spaceTravelers1, spaceTravelers2, spaceTravelers3],
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
    id: 9,
    title: "Retro Watchers",
    images: [retroWatchers1, retroWatchers2, retroWatchers3, retroWatchers4],
    description:
      "A '90s-inspired movie website showcasing all the nostalgic classics. Powered by an external API, it brings you detailed information on your favorite films.",
    techs: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />],
    techsStyle: { color: "white", size: "1.5rem" },
    icon: <IoLogoJavascript />,
    iconStyle: { color: "EFD81D", size: "2rem" },
    liveDemo: "https://thunderous-dasik-81b884.netlify.app/",
    gitHub: "https://github.com/chelobotix/Retro-Watchers-Capstone",
  },
  {
    id: 10,
    title: "School Library",
    images: [schoolLibrary1, schoolLibrary2, schoolLibrary3],
    description:
      "Experience a streamlined School Library web site built using Ruby, boasting a terminal interface. Effortlessly manage books and people through efficient CRUD operations, ensuring smooth functionality for users.",
    techs: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />],
    techsStyle: { color: "white", size: "1.5rem" },
    icon: <DiRuby />,
    iconStyle: { color: "C6322C", size: "2rem" },
    liveDemo: "https://github.com/chelobotix/school-library",
    gitHub: "https://github.com/chelobotix/school-library",
  },
];

export default projectList;