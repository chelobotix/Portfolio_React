import reggaeConcert1 from '@/assets/images/Reggae_concert1-min.jpg';
import reggaeConcert2 from '@/assets/images/Reggae_concert2-min.jpg';
import reggaeConcert3 from '@/assets/images/Reggae_concert3-min.jpg';
import reggaeConcert4 from '@/assets/images/Reggae_concert4-min.jpg';
import awesome1 from '@/assets/images/awesome_books1-min.jpg';
import awesome2 from '@/assets/images/awesome_books2-min.jpg';
import awesome3 from '@/assets/images/awesome_books3-min.jpg';
import awesome4 from '@/assets/images/awesome_books4-min.jpg';
import bookStore1 from '@/assets/images/book_store1-min.jpg';
import bookStore2 from '@/assets/images/book_store2-min.jpg';
import huyguens1 from '@/assets/images/huyguens_luxory_watches1.jpg';
import huyguens2 from '@/assets/images/huyguens_luxory_watches2.jpg';
import huyguens3 from '@/assets/images/huyguens_luxory_watches3.jpg';
import huyguens4 from '@/assets/images/huyguens_luxory_watches4.jpg';
import leaderboard1 from '@/assets/images/leaderboard1-min.jpg';
import leaderboard2 from '@/assets/images/leaderboard2-min.jpg';
import leaderboard3 from '@/assets/images/leaderboard3-min.jpg';
import retroWatchers1 from '@/assets/images/retro_watchers1-min.jpg';
import retroWatchers2 from '@/assets/images/retro_watchers2-min.jpg';
import retroWatchers3 from '@/assets/images/retro_watchers3-min.jpg';
import retroWatchers4 from '@/assets/images/retro_watchers4-min.jpg';
import spaceTravelers1 from '@/assets/images/space_travelers1-min.jpg';
import spaceTravelers2 from '@/assets/images/space_travelers2-min.jpg';
import spaceTravelers3 from '@/assets/images/space_travelers3-min.jpg';
import todoList1 from '@/assets/images/todolist1-min.jpg';
import todoList2 from '@/assets/images/todolist2-min.jpg';
import todoList3 from '@/assets/images/todolist3-min.jpg';
import venomPrecision2 from '@/assets/images/venom_precision1-min.jpg';
import venomPrecision1 from '@/assets/images/venom_precision2-min.jpg';
import venomPrecision3 from '@/assets/images/venom_precision3-min.jpg';
import venomPrecision4 from '@/assets/images/venom_precision4-min.jpg';
import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiRedux, SiRubyonrails, SiWebpack } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { TbApi } from 'react-icons/tb';
import { v4 as uuidv4 } from 'uuid';

const projectList = [
  {
    id: 1,
    title: 'Huyguens Luxory Watches',
    images: [huyguens1, huyguens2, huyguens3, huyguens4],
    description:
      "I've invested all my effort in creating scalable and reusable React components with TypeScript. The codebase is a testament to cleanliness, incorporating design patterns like custom hooks to ensure efficiency and maintainability.",
    techs: [<FaReact key={uuidv4()} />, <SiRedux key={uuidv4()} />, <SiRubyonrails key={uuidv4()} />, <IoLogoJavascript key={uuidv4()} />],
    techsStyle: { color: 'white', size: '1.5rem' },
    icons: [
      { icon: <SiRubyonrails key={uuidv4()} />, style: { color: 'ffffff', size: '3rem' }, bg: '#C6322C' },
      { icon: <FaReact key={uuidv4()} />, style: { color: '61DBFB', size: '3rem' }, bg: '#212121' },
      { icon: <SiRedux key={uuidv4()} />, style: { color: '764abc', size: '3rem' }, bg: '#efefef' },
      { icon: <BiLogoPostgresql key={uuidv4()} />, style: { color: '336791', size: '3rem' }, bg: '#ffffff' },
    ],
    liveDemo: 'https://huygenswatches.netlify.app/',
    gitHub: 'https://github.com/chelobotix/Huygens_Luxury_Watches_Store',
    features: ['Front-end with React', 'Redux Toolkit', 'Back-end with Ruby on Rails', 'PostgreSQL Database'],
  },
  {
    id: 2,
    title: 'Venom Precision',
    images: [venomPrecision1, venomPrecision2, venomPrecision3, venomPrecision4],
    description: 'Venom Precision Paintball Website: Your go-to source for all things paintball! Explore our extensive collection of articles.',
    techs: [<FaReact key={uuidv4()} />, <SiRedux key={uuidv4()} />, <SiRubyonrails key={uuidv4()} />, <IoLogoJavascript key={uuidv4()} />],
    techsStyle: { color: 'white', size: '1.5rem' },
    icons: [
      { icon: <SiRubyonrails key={uuidv4()} />, style: { color: 'ffffff', size: '3rem' }, bg: '#C6322C' },
      { icon: <FaReact key={uuidv4()} />, style: { color: '61DBFB', size: '3rem' }, bg: '#212121' },
      { icon: <SiRedux key={uuidv4()} />, style: { color: '764abc', size: '3rem' }, bg: '#efefef' },
      { icon: <BiLogoPostgresql key={uuidv4()} />, style: { color: '336791', size: '3rem' }, bg: '#ffffff' },
    ],
    liveDemo: 'https://velvety-genie-9ab88d.netlify.app/',
    gitHub: 'https://github.com/chelobotix/VenomPrecision-back-end',
    features: ['Front-end with React', 'Redux Toolkit', 'Back-end with Ruby on Rails', 'PostgreSQL Database'],
  },
  {
    id: 3,
    title: 'Retro Watchers',
    images: [retroWatchers1, retroWatchers2, retroWatchers3, retroWatchers4],
    description:
      "A '90s-inspired movie website showcasing all the nostalgic classics. Powered by an external API, it brings you detailed information on your favorite films.",
    techs: [<FaHtml5 key={uuidv4()} />, <FaCss3Alt key={uuidv4()} />, <IoLogoJavascript key={uuidv4()} />],
    techsStyle: { color: 'white', size: '1.5rem' },
    icons: [
      { icon: <IoLogoJavascript key={uuidv4()} />, style: { color: '000000', size: '3rem' }, bg: '#F7DF1E' },
      { icon: <SiWebpack key={uuidv4()} />, style: { color: '8dd6f9', size: '3rem' }, bg: '#1d78c1' },
      { icon: <TbApi key={uuidv4()} />, style: { color: 'ffffff', size: '3rem' }, bg: '#EC6524' },
    ],
    liveDemo: 'https://thunderous-dasik-81b884.netlify.app/',
    gitHub: 'https://github.com/chelobotix/Retro-Watchers-Capstone',
    features: ['Webpack', 'Callbacks and Promises', 'Send and receive data from an API', 'JavaScript code asynchronous'],
  },
  {
    id: 4,
    title: 'Reggae Concert',
    images: [reggaeConcert1, reggaeConcert2, reggaeConcert3, reggaeConcert4],
    description: 'A fictitious Reggae Concert web page to demonstrate my skills in Html, Css and DOM manipulation with Javascript',
    techs: [<FaCss3Alt key={uuidv4()} />, <FaHtml5 key={uuidv4()} />, <IoLogoJavascript key={uuidv4()} />],
    techsStyle: { color: 'white', size: '1.5rem' },
    icons: [
      { icon: <FaHtml5 key={uuidv4()} />, style: { color: 'ffffff', size: '3rem' }, bg: '#D94F27' },
      { icon: <FaCss3Alt key={uuidv4()} />, style: { color: 'ffffff', size: '3rem' }, bg: '#1C6FB5' },
    ],
    liveDemo: 'https://chelobotix.github.io/Capstone-project-Protoje-concert/',
    gitHub: 'https://github.com/chelobotix/Capstone-project-Protoje-concert',
    features: ['Hamburger menu', 'Featured Performers section', 'Load more button', 'Social media menu'],
  },
  {
    id: 5,
    title: 'Leader Board',
    images: [leaderboard1, leaderboard2, leaderboard3],
    description:
      'Leaderboard Lord of the Rings: A modular JavaScript and Webpack-powered website for tracking and displaying player scores. Embrace the competitive spirit of Middle-earth.',
    techs: [
      <FaCss3Alt key={uuidv4()} />,
      <FaHtml5 key={uuidv4()} />,
      <IoLogoJavascript key={uuidv4()} />,
      <SiWebpack key={uuidv4()} />,
      <TbApi key={uuidv4()} />,
    ],
    techsStyle: { color: 'white', size: '1.5rem' },
    icons: [
      { icon: <IoLogoJavascript key={uuidv4()} />, style: { color: '000000', size: '3rem' }, bg: '#F7DF1E' },
      { icon: <SiWebpack key={uuidv4()} />, style: { color: '8dd6f9', size: '3rem' }, bg: '#1d78c1' },
      { icon: <TbApi key={uuidv4()} />, style: { color: 'ffffff', size: '3rem' }, bg: '#EC6524' },
    ],
    liveDemo: 'https://whimsical-peony-71ff5a.netlify.app/',
    gitHub: 'https://github.com/chelobotix/Leaderboard-Chelobotix',
    features: ['LeaderBoard Table', 'Add Score Form', 'Send and receive data from an API'],
  },
  {
    id: 6,
    title: "Space Travelers' Hub",
    images: [spaceTravelers1, spaceTravelers2, spaceTravelers3],
    description: 'Check out the SpaceX rockets in detail and have the opportunity to make a reservation to travel in one of them.',
    techs: [<FaReact key={uuidv4()} />, <SiRedux key={uuidv4()} />, <TbApi key={uuidv4()} />],
    techsStyle: { color: 'white', size: '1.5rem' },
    icons: [
      { icon: <FaReact key={uuidv4()} />, style: { color: '61DBFB', size: '3rem' }, bg: '#212121' },
      { icon: <SiRedux key={uuidv4()} />, style: { color: '764abc', size: '3rem' }, bg: '#efefef' },
    ],
    liveDemo: 'https://friendly-axolotl-ffabbd.netlify.app/',
    gitHub: 'https://github.com/chelobotix/Space-Travelers-Hub',
    features: ['Space-X Rockets, Missions and Profile', 'API connection', 'React Route', 'Redux'],
  },
  {
    id: 7,
    title: 'Awesome Books',
    images: [awesome1, awesome2, awesome3, awesome4],
    description:
      'Awesome Books is a dynamic JavaScript-based SPA that empowers users to effortlessly add and beautifully display their favorite books.',
    techs: [<FaCss3Alt key={uuidv4()} />, <FaHtml5 key={uuidv4()} />, <IoLogoJavascript key={uuidv4()} />],
    techsStyle: { color: 'white', size: '1.5rem' },
    icons: [
      { icon: <FaHtml5 key={uuidv4()} />, style: { color: 'ffffff', size: '3rem' }, bg: '#D94F27' },
      { icon: <FaCss3Alt key={uuidv4()} />, style: { color: 'ffffff', size: '3rem' }, bg: '#1C6FB5' },
      { icon: <IoLogoJavascript key={uuidv4()} />, style: { color: '000000', size: '3rem' }, bg: '#F7DF1E' },
    ],
    liveDemo: 'https://chelobotix.github.io/Awesome_Book/',
    gitHub: 'https://github.com/chelobotix/Awesome_Book',
    features: ['Single Page Application (SPA)', 'JavaScript - Modules ', 'Display list of books', 'Localstorage management'],
  },
  {
    id: 8,
    title: 'To Do List',
    images: [todoList1, todoList2, todoList3],
    description:
      "To Do List is a App that let you Create, Display, Delete and Update tasks and store them on Local Storage. It's a Single Page Application that has been bundled with Webpack.",
    techs: [<FaCss3Alt key={uuidv4()} />, <FaHtml5 key={uuidv4()} />, <IoLogoJavascript key={uuidv4()} />, <SiWebpack key={uuidv4()} />],
    techsStyle: { color: 'white', size: '1.5rem' },
    icons: [
      { icon: <FaHtml5 key={uuidv4()} />, style: { color: 'ffffff', size: '3rem' }, bg: '#D94F27' },
      { icon: <FaCss3Alt key={uuidv4()} />, style: { color: 'ffffff', size: '3rem' }, bg: '#1C6FB5' },
      { icon: <IoLogoJavascript key={uuidv4()} />, style: { color: '000000', size: '3rem' }, bg: '#F7DF1E' },
    ],
    liveDemo: 'https://chelobotix.github.io/To-Do-List-Barrenechea/dist/',
    gitHub: 'https://github.com/chelobotix/To-Do-List-Barrenechea',
    features: ['Webpack', 'CRUD Task', 'Remove Multiple Tasks', 'Localstorage management'],
  },

  {
    id: 9,
    title: 'Book Store',
    images: [bookStore1, bookStore2],
    description: 'If you love to read with BookStore App you can add your favorite books and track your progress as you read them.',
    techs: [<FaReact key={uuidv4()} />, <SiRedux key={uuidv4()} />, <TbApi key={uuidv4()} />],
    techsStyle: { color: 'white', size: '1.5rem' },
    icons: [
      { icon: <FaReact key={uuidv4()} />, style: { color: '61DBFB', size: '3rem' }, bg: '#212121' },
      { icon: <SiRedux key={uuidv4()} />, style: { color: '764abc', size: '3rem' }, bg: '#efefef' },
    ],
    liveDemo: 'https://fascinating-cat-ad9483.netlify.app',
    gitHub: 'https://github.com/chelobotix/Book-Store-Chelobotix',
    features: ['Redux Toolkit', 'API connection', 'Css module Style'],
  },
  {
    id: 10,
    title: "Space Travelers' Hub",
    images: [spaceTravelers1, spaceTravelers2, spaceTravelers3],
    description: 'Check out the SpaceX rockets in detail and have the opportunity to make a reservation to travel in one of them.',
    techs: [<FaReact key={uuidv4()} />, <SiRedux key={uuidv4()} />, <TbApi key={uuidv4()} />],
    techsStyle: { color: 'white', size: '1.5rem' },
    icons: [
      { icon: <FaReact key={uuidv4()} />, style: { color: '61DBFB', size: '3rem' }, bg: '#212121' },
      { icon: <SiRedux key={uuidv4()} />, style: { color: '764abc', size: '3rem' }, bg: '#efefef' },
    ],
    liveDemo: 'https://friendly-axolotl-ffabbd.netlify.app/',
    gitHub: 'https://github.com/chelobotix/Space-Travelers-Hub',
    features: ['Space-X Rockets, Missions and Profile', 'API connection', 'React Route', 'Redux'],
  },

  // {
  //   id: 10,
  //   title: "School Library",
  //   images: [schoolLibrary1, schoolLibrary2, schoolLibrary3],
  //   description:
  //     "Experience a streamlined School Library web site built using Ruby, boasting a terminal interface. Effortlessly manage books and people through efficient CRUD operations, ensuring smooth functionality for users.",
  //   techs: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />],
  //   techsStyle: { color: "white", size: "1.5rem" },
  //   icon: <DiRuby />,
  //   iconStyle: { color: "C6322C", size: "2rem" },
  //   liveDemo: "https://github.com/chelobotix/school-library",
  //   gitHub: "https://github.com/chelobotix/school-library",
  // },
];

export default projectList;
