import { useEffect, useMemo, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import StyledParticles from "../Particular.styled";
interface ParticularProps {
  id: string;
}
const ParticlesBackgroundCircle = ({ id }: ParticularProps) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded", container);
  };

  const options: ISourceOptions = useMemo(
  () => ({
    fullScreen: { enable: false },
    fpsLimit: 120,
    particles: {
      number: {
        value: 600,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#facc15", "#ffffff", "#162231"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: { min: 0.05, max: 0.4 },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      size: {
        value: { min: 0.5, max: 2 },
      },
      move: {
        enable: true,
        speed: 0.5, // Медленный дрейф
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
      links: {
        enable: false,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
      },
      modes: {
        bubble: {
          distance: 100,
          size: 4,
          duration: 0.3,
          opacity: 1, 
          color: "#facc15",
        },
      },
    },
    detectRetina: true,
  }),
  []
);


  if (init) {
    return (
      <StyledParticles
        id={id}
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return null;
};

export default ParticlesBackgroundCircle;
