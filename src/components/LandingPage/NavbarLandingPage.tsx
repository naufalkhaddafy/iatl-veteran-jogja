import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  DarkThemeToggle,
  Flowbite,
} from "flowbite-react";

import Link from "next/link";

export default function NavbarLandingPage() {
  return (
    <Navbar fluid rounded className="py-5 mx-0">
      <NavbarBrand href="#">
        <img
          src="/LandingPage/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span> */}
      </NavbarBrand>
      <div className="flex items-center gap-x-2 md:order-2">
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
        <Link
          className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center  bg-transparent text-primary hover:text-secondary hover:bg-none dark:text-white"
          href="/dashboard"
        >
          Sign In
        </Link>
        <Link
          className=" text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-primary dark:hover:bg-secondary dark:focus:ring-blue-800"
          href="/dashboard"
        >
          Sign Up
        </Link>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
