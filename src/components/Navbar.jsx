import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import logo from "../assets/Logo.jpg";
import CustomButton from "./CustomButton";

export default function NavbarMenu() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="normal"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center hover:text-primary">
          Product{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-4 h-4 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="normal"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center hover:text-primary">
          About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="normal"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center hover:text-primary">
          Contact Us
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-3xl py-2 px-4 lg:px-8 lg:py-4 rounded-none">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center ">
          <img src={logo} alt="" />
          <div className="hidden lg:block lg:ml-[150px]">{navList}</div>
        </div>
        <div>
          <CustomButton
            color="primary"
            variant="filled"
            className="uppercase w-[163px] h-[52px] ml-[24px]  justify-center font-semibold"
          >
            Get Started
          </CustomButton>
          <CustomButton
            color="primary"
            variant="outlined"
            className="uppercase text-black w-[112px] h-[52px] ml-[24px] border-black justify-center"
          >
            Login
          </CustomButton>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
