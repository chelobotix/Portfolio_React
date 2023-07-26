import { SiJavascript, SiTailwindcss, SiBootstrap, SiRedux, SiRubyonrails, SiSelenium, SiJest, SiRubygems } from "react-icons/si";
import { DiRuby, DiHtml5, DiReact, DiCss3 } from "react-icons/di";
import { GiCapybara } from "react-icons/gi";
import { BiLogoGit, BiLogoGithub, BiSolidTerminal } from "react-icons/bi";

const techList = {
  languages: [
    [<SiJavascript />, "EFD81D", "Javascript"],
    [<DiRuby />, "C6322C", "Ruby"],
    [<DiHtml5 />, "E86228", "HTML5"],
    [<DiCss3 />, "2862E9", "CSS3"],
  ],
  frameworks: [
    [<DiReact />, "5ED3F3", "React"],
    [<SiRedux />, "7248B6", "Redux"],
    [<SiRubyonrails />, "C6322C", "Ruby on Rails"],
    [<SiSelenium />, "00AE00", "Selenium"],
    [<SiRubygems />, "C6322C", "RSpec"],
    [<GiCapybara />, "EB9612", "Capybara"],
    [<SiJest />, "C03B13", "Jest"],
    [<SiBootstrap />, "FFF", "Bootstrap"],
    [<SiTailwindcss />, "36B7F0", "Tailwind"],
  ],
  skills: [
    [<BiLogoGit />, "E94D2E", "Git"],
    [<BiLogoGithub />, "161414", "Github"],
    [<BiSolidTerminal />, "0CAB49", "Terminal"],
  ],
};

export default techList;
