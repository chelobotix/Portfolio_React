import { Typography } from "@material-tailwind/react";
import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t p-6 text-center md:justify-between bg-gradient-to-t from-dark-blue to-dark-pink">
      <Typography color="white" className="font-normal">
        &copy; 2023 Barrenechea
      </Typography>
      <ul className="flex  items-center gap-y-2 gap-x-8">
        <SocialMediaIcons color={"#fff"} />
      </ul>
    </footer>
  );
};

export default Footer;
