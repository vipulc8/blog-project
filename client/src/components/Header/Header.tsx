import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-gray-700"
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-gray-700"
      >
        <a href="#" className="flex items-center">
          Blogs
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-gray-700"
      >
        <a href="#" className="flex items-center">
          Pricing
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 shadow-none">
        <div className="flex items-center lg:justify-around justify-between text-blue-gray-900">
          <div className="flex items-center gap-4">
            <div className="main-logo flex items-center">
              <div className="logo-img-div relative w-8 h-8 rounded-lg items-center overflow-hidden flex justify-center">
                <img
                  className="logo-img"
                  src="./assets/logo.svg"
                  alt="logo"
                  width="32"
                  height="32"
                />
                <div className="logo-blur-rectangle z-[2] w-full h-1/2 backdrop-blur-[3px] absolute top-1/2 bottom-0 left-0 right-0 "></div>
                <div className="logo-dot z-[1] w-1/2 h-1/2 bg-red-500 rounded-[50%] absolute bg-gradient-to-r from-primaryPurple to-[#53389e]"></div>
              </div>
              <Typography className="logo-text ms-2 font-medium font-inter">
                Untitled UI
              </Typography>
            </div>
            <div className="mr-4 hidden lg:block">{navList}</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden gap-2 lg:flex">
              <Button variant="text" size="sm" color="blue-gray">
                Sign In
              </Button>
              <Button variant="gradient" size="sm" color="deep-purple">
                Sign Up
              </Button>
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
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Sign Up</span>
          </Button>
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Log In</span>
          </Button>
        </MobileNav>
      </Navbar>
    </>
  );
}
