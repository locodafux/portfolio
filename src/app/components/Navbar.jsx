"use client";
import { useState } from "react";
import { CustomButton } from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after scrolling
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: "skills", label: "Skills" },
    { id: "about", label: "About Me" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
    {
      id: "resume",
      label: "Resume",
      href: "/timkang-resume.pdf",
      download: "timkang-resume.pdf",
    },
  ];

  return (
    <nav className="w-screen h-[100px] flex justify-between items-center p-6">
      <div className="flex items-center">
        <span className="font-bold text-2xl">Tims</span>
      </div>

      <div className="hidden md:flex w-[35%] justify-between">
        <ul className="flex w-full justify-between list-none">
          {navLinks
            .filter((link) => link.id !== "resume")
            .map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
        </ul>
      </div>

      <div className="md:hidden flex justify-between w-full">
        <div></div>
        <button onClick={toggleMenu} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="md:hidden">
        {isMenuOpen && (
          <div className="absolute top-[100px] left-0 w-full bg-white shadow-md z-10">
            <ul className="flex flex-col items-center list-none mb-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  {link.id === "resume" ? (
                    <a
                      href={link.href}
                      download={link.download}
                      className="cursor-pointer p-4 w-full text-center"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="cursor-pointer p-4 w-full text-center"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="hidden md:block">
        <CustomButton href="/timkang-resume.pdf" download="timkang-resume.pdf">
          Resume
        </CustomButton>
      </div>
    </nav>
  );
};

export default Navbar;
