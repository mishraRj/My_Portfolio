import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import profilePic from "../assets/me.webp";
import projector from "../assets/SpaceSHips/newAlienProjector.png";
import alienAudio from "../assets/alien-voice.mp3";
import "./css/style.css";

const HeroSection = () => {
  const spaceshipRef = useRef(null);
  const pfpRef = useRef(null);
  const alienVoiceRef = useRef(null);

  useEffect(() => {
    const spaceShip = spaceshipRef.current;
    const pfp = pfpRef.current;
    const alienVoice = alienVoiceRef.current;

    function appearSpaceship() {
      // spaceship appear animation
      spaceShip.style.animation = "appearing 6s forwards";
      pfp.style.opacity = "0";

      setTimeout(() => {
        spaceShip.style.animation = "projectorMove 2s infinite alternate";
      }, 6000);

      setTimeout(() => {
        spaceShip.classList.add("light-beams-visible");
        pfp.style.opacity = "1";
        pfp.style.transition = "2s ease-in";
      }, 6000);
    }

    appearSpaceship();

    // spaceship click → alien voice
    const handleClick = () => {
      alienVoice.play().catch(err => console.log("Alien audio error: ", err));
      spaceShip.style.animation = "scaleBounce 0.9s ease-in-out forwards";

      spaceShip.addEventListener("animationend", function reset() {
        spaceShip.style.animation = "";
        spaceShip.removeEventListener("animationend", reset);
      });
    };

    spaceShip.addEventListener("click", handleClick);

    return () => {
      spaceShip.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-10">
      <audio ref={alienVoiceRef} src={alienAudio} />

      <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT SIDE TEXT */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-4xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Rajat
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Mishra
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3 classic-font">
            I'm a developer passionate about creating seamless web applications.
            With strong expertise in back-end development and a good command of
            front-end design, I deliver solutions that are both functional and
            engaging.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        {/* SPACESHIP PROJECTOR */}
        <div className="alien-projector" ref={spaceshipRef}>
          <img src={projector} alt="Alien Projector" />
        </div>

        {/* PROFILE PHOTO */}
        <div className="flex justify-center md:justify-end px-0">
          <div className="hologram-container" ref={pfpRef}>
            <div className="hologram-effect">
              <img src={profilePic} alt="Profile Picture" />
            </div>
            <p className="hologram-text">Rajat Mishra</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
