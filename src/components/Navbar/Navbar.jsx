import logo from "@/assets/images/logo_barrenechea.png";
import { useState, useEffect } from "react";
import { Navbar, Collapse, Typography, Button, IconButton } from "@material-tailwind/react";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="white" className="p-1 font-semibold font-monument text-lg">
        <a href="#" className="flex items-center">
          Projects
        </a>
      </Typography>
      <Typography as="li" variant="small" color="white" className="p-1 font-semibold font-monument text-lg">
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography as="li" variant="small" color="white" className="p-1 font-semibold font-monument text-lg">
        <a href="#" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar shadow={false} blurred={false} fullWidth={true} className="py-2 px-4 lg:px-8 lg:py-4 bg-dark-blue border-dark-blue">
      <div className="flex items-center justify-between text-white ">
        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
          <img className="w-36 md:w-44" src={logo} alt="" />
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden "
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto border-white border-2 rounded-md p-2">{navList}</div>
      </Collapse>
    </Navbar>
  );
};

export default Nav;
