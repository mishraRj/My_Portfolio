import "./css/navBarStyle.css";
import profilePic from "../assets/me.webp";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Resume", href: "#resume" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <input type="checkbox" id="check" />
      <div className="btn_one">
        <label htmlFor="check">
          <i className="fa-solid fa-bars" style={{ zIndex: "100000" }}></i>
        </label>
      </div>
      <div
        className={cn(
          "fixed w-full transition-all duration-300 nav-bar",
          isScrolled
            ? "py-0 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-0"
        )}>
        <div className="branding">
          <h3>Navigate</h3>

          <div className="btn_two">
            <label htmlFor="check" style={{ color: "grey" }}>
              <i className="fa-solid fa-xmark"></i>
            </label>
          </div>
        </div>

        <div className="menu">
          <ul>
            <li className="pfp">
              <img src={profilePic} alt="Profile Picture" />
              <a
                href="#about"
                style={{ animation: "text-glow 2s infinite alternate" }}>
                About Me
              </a>
            </li>

            <li>
              <i className="fas fa-home"></i>
              <a href="#hero">Home</a>
            </li>

            <li>
              <i className="fa-solid fa-code"></i>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <i className="fa-solid fa-briefcase"></i>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <i className="fa-solid fa-file"></i>
              <a href="#resume" rel="noreferrer">
                Resume
              </a>
            </li>

            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
