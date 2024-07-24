"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AcmeLogo } from "./logo";
import { usePathname } from "next/navigation";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  weight: "400",
  subsets: ['latin'],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    setIsOpen(false);
    setIsUserMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getLinkClass = (path) => {
    return pathname === path
      ? `flex py-3 sm:px-4 text-slate-900 items-center sm:mt-0 justify-center sm:mb-7 mt-2 md:mb-0 md:mr-5 bg-slate-300 rounded-sm text-nowrap " ${prompt.className}`
      : `flex py-3 sm:px-4 text-white items-center sm:mt-0 justify-center sm:mb-7 mt-2 md:mb-0 md:mr-5  hover:underline text-nowrap  ${prompt.className}`;
  };

  return (
    <>
      <nav
        id="navbar"
        className="bg-black p-1 fixed top-0 w-full z-10 flex items-center justify-between shadow-md"
      >
        <AcmeLogo />
        <div className="flex items-center ">
          <button
            className="hamburger block md:hidden px-3 py-2 rounded text-white"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            &#9776;
          </button>
          <div
            ref={mobileMenuRef}
            className={`menu ${
              isOpen ? "flex" : "hidden"
            } md:flex items-center justify-end flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-slate-700 md:bg-transparent`}
            style={{ zIndex: 9 }}
          >
            <ul className="flex flex-col md:flex-row list-none w-full md:w-auto sm:mr-36">
              <li>
                <a
                  className={getLinkClass("/dashboard/users")}
                  href="#section1"
                  onClick={(e) => handleLinkClick(e, "section1")}
                >
                  Blog <i className="fa-solid fa-users"></i>
                </a>
              </li>
              <li>
                <a
                  className={getLinkClass("/dashboard/addcourse")}
                  href="#section2"
                  onClick={(e) => handleLinkClick(e, "section2")}
                >
                  Tutorial <i className="fa-solid fa-plus"></i>
                </a>
              </li>
              <li>
                <a
                  className={getLinkClass("/dashboard/courses")}
                  href="#section3"
                  onClick={(e) => handleLinkClick(e, "section3")}
                >
                  Pricing <i className="fa-brands fa-discourse"></i>
                </a>
              </li>
              <li>
                <a
                  className={getLinkClass("/dashboard/courses")}
                  href="#section4"
                  onClick={(e) => handleLinkClick(e, "section4")}
                >
                  Log In <i className="fa-brands fa-discourse"></i>
                </a>
              </li>
              <li>
                <a
                  className="bg-blue-600 px-6 py-3 text-white font-semibold rounded-md flex justify-center items-center text-nowrap"
                  href="/dashboard/courses"
                  onClick={(e) => handleLinkClick(e, "section5")}
                >
                  Sign Up <i className="fa-brands fa-discourse"></i>
                </a>
              </li>
              <div className="relative flex items-center sm:mt-2 sm:mr-8 justify-center mt-3 mb-2"></div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;