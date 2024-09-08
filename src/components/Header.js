import { Bars3Icon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="flex justify-between px-5 py-2 bg-primary border-b-2 border-secondary">
      <a className="font-bold text-black" href="/">
        Sa Aadhath
      </a>
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {toggleMenu && (
        <nav className="block md:hidden">
          <ul
            onClick={(e) => setToggleMenu(!toggleMenu)}
            className={`flex flex-col text-white mobile-nav ${
              scrolled ? "scrolled" : ""
            }`}
          >
            <a href="#home">
              <li>Home</li>
            </a>

            <a href="#about">
              <li>About</li>
            </a>

            <a href="#projects">
              <li>Projects</li>
            </a>

            <a href="#resume">
              <li>Resume</li>
            </a>

            <a href="#contact">
              <li>Contacts</li>
            </a>
          </ul>
        </nav>
      )}
      <button
        onClick={(e) => setToggleMenu(!toggleMenu)}
        className="block md:hidden"
      >
        <Bars3Icon className="text-white h-5" />
      </button>
    </header>
  );
}
