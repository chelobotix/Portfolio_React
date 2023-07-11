import project1 from "@/assets/images/venom_precision.jpg";
import project2 from "@/assets/images/reggae_concert.jpg";
import project3 from "@/assets/images/roman.jpg";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiRubyonrails, SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
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
];

export default projectList;
