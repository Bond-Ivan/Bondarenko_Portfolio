import { useEffect, useMemo, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import StyledParticles from "../Particular.styled";

interface ParticularProps {
  id: string;
}

const ParticlesBackgroundGrab = ({ id }: ParticularProps) => {
  const [init, setInit] = useState(false);

  // Проверяем наличие тач-скрина (самый надежный способ определить мобилку/планшет)
  const isTouchDevice = typeof window !== "undefined" && 
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

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
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            // ОТКЛЮЧАЕМ ТОЛЬКО ЗДЕСЬ
            enable: !isTouchDevice, 
            mode: "grab",
            parallax: {
              enable: !isTouchDevice, 
              force: 60, 
              smooth: 10,
            },
          },
        },
        modes: {
          grab: {
            distance: 200,
            links: { opacity: 0.5 },
          },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: false,
          straight: false,
          outModes: { default: "out" },
        },
        number: {
          density: { enable: true, area: 800 },
          value: 100, // ВЕРНУЛ 100 КАК БЫЛО
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [isTouchDevice]
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

export default ParticlesBackgroundGrab;
