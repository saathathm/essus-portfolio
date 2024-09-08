import HeroImg from "../assets/hero.png";
import { GrLinkedin } from "react-icons/gr";

export default function Hero() {
  const config = {
    subtitle: "I'm a Full-stack developer",
    social: {
      linkein: "https://www.linkedin.com/in/sa-aadhath-samsameer",
    },
  };
  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-white text-6xl font-hero-font">
          Hi, <br />
          I'm <span className="text-black">MS</span> Sa Aadhath
          <p className="text-2xl">{config.subtitle}</p>
        </h1>
        <div className="flex py-10">
          <a
            href={config.social.linkein}
            target="blank"
            className="pr-5 text-white hover:text-blue-400"
          >
            <GrLinkedin size={40} />
          </a>
        </div>
      </div>
      <img className="md:w-1/3" alt="hero" src={HeroImg} />
    </section>
  );
}
