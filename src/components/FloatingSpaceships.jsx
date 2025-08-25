import React, { useEffect } from "react";
import "./css/homeAliens.css"; // styling here
import alien1 from "../assets/SpaceSHips/newAlien1.png";
import alien2 from "../assets/SpaceSHips/newAlien2.png";
import alien3 from "../assets/SpaceSHips/newAlien3.png";
import alien4 from "../assets/SpaceSHips/newAlien4.png";
import alien5 from "../assets/SpaceSHips/newAlien5.png";
import alien6 from "../assets/SpaceSHips/pink.png";
import alien7 from "../assets/SpaceSHips/red.png";
import alien8 from "../assets/SpaceSHips/green.png";

const images = [alien1, alien2, alien3, alien4, alien5, alien6, alien7, alien8];

const FloatSpaceships = () => {
  useEffect(() => {
    const documentHeight = document.body.scrollHeight - 400;

    images.forEach(src => {
      const spaceShip = document.createElement("div");
      spaceShip.classList.add("spaceShip");

      spaceShip.style.left = `${Math.random() * 100}vw`;
      spaceShip.style.top = `${Math.random() * documentHeight}px`;
      spaceShip.style.animationDuration = `${Math.random() * 70 + 60}s`;

      const img = document.createElement("img");
      img.src = src;

      img.style.width = "70px";
      img.style.height = "70px";

      spaceShip.appendChild(img);
      document.body.appendChild(spaceShip);
    });
  }, []);

  return null; // ye component bas DOM inject karega
};

export default FloatSpaceships;
