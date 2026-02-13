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

  // Проверка на мобилку (ширина меньше 768px)
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  // Слушатель ресайза, чтобы динамически отключать/включать эффекты
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    
    // Инициализация движка
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded", container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: {
        color: { value: "transparent" }, // Оставляем прозрачным, чтобы видеть твой градиент
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            // Если мобилка — выключаем hover полностью
            enable: !isMobile, 
            mode: "grab",
            parallax: {
              enable: !isMobile, // Выключаем параллакс на мобилках
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
          // Уменьшаем количество частиц на мобилках для оптимизации
          value: isMobile ? 40 : 100, 
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [isMobile] // Пересобираем конфиг при изменении размера экрана
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
