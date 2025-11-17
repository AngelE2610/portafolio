"use client";
import { useState, useEffect } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Code } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiAngular,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiPostgresql,
  SiSequelize,
  SiGit,
  SiGithub,
  SiGitlab,
} from "react-icons/si";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [themeColor, setThemeColor] = useState("hsl(214,84%,56%)");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
    document.documentElement.style.setProperty("--primary-color", themeColor);
  }, [darkMode, themeColor]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleColorChange = (color: any) => {
    setThemeColor(color);
  };

  const technologies = [
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
      level: "Medio-Alto",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
      level: "Medio-Alto",
    },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: "Medio" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6", level: "Medio" },
    { name: "Angular", icon: SiAngular, color: "#DD0031", level: "Medio-Alto" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: "Medio" },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#339933",
      level: "Medio-Bajo",
    },
    { name: "Express", icon: SiExpress, color: "#000000", level: "Medio-Bajo" },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "#4169E1",
      level: "Medio",
    },
    {
      name: "Sequelize",
      icon: SiSequelize,
      color: "#52B0E7",
      level: "Medio-Bajo",
    },
    {
      name: "Bootstrap",
      icon: SiBootstrap,
      color: "#7952B3",
      level: "Medio-Alto",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
      level: "Medio-Bajo",
    },
    { name: "Git", icon: SiGit, color: "#F05032", level: "Medio" },
    { name: "GitHub", icon: SiGithub, color: "#181717", level: "Medio" },
    { name: "GitLab", icon: SiGitlab, color: "#FC6D26", level: "Medio" },
  ];

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <header className="header">
        <div className="switches">
          <div className="toggle-theme" onClick={toggleDarkMode}>
            <img
              id="toggle-icon"
              src={darkMode ? "sun.svg" : "moon.svg"}
              alt=""
              className="toggle-theme_icon"
            />
            <p id="toggle-text" className="toggle-theme_text">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </p>
          </div>
        </div>
        <div className="colors">
          <div
            data-colors="hsl(214,84%,56%)"
            className="colors_items colors_items--blue"
            onClick={() => handleColorChange("hsl(214,84%,56%)")}
          ></div>
          <div
            data-colors="hsl(150,84%,56%)"
            className="colors_items colors_items--green"
            onClick={() => handleColorChange("hsl(150,84%,56%)")}
          ></div>
          <div
            data-colors="hsl(276,84%,56%)"
            className="colors_items colors_items--purple"
            onClick={() => handleColorChange("hsl(276,84%,56%)")}
          ></div>
          <div
            data-colors="hsl(46,84%,56%)"
            className="colors_items colors_items--orange"
            onClick={() => handleColorChange("hsl(46,84%,56%)")}
          ></div>
        </div>
      </header>

      <main className="main-content px-8 py-4 w-4/5">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          {/*  Foto  */}
          <div className="w-full md:w-2/6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 h-full flex flex-col items-center text-center">
              <div className="aspect-square bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4 w-full overflow-hidden">
                <img
                  src="angel.jpg"
                  alt="Foto de Perfil"
                  className="w-full h-full object-cover"
                />
              </div>

              <h1
                className="text-2xl font-bold mb-2"
                style={{ color: "var(--primary-color)" }}
              >
                Angel Ernesto Valdes de la Cruz
              </h1>

              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin size={16} />
                <span className="text-sm">UCI/Habana, Cuba</span>
              </div>
            </div>
          </div>

          {/* Sobre mí + Contacto */}
          <div className="w-full md:w-4/6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 h-full shadow-sm">
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--primary-color)" }}
              >
                Sobre Mí
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Ingeniero en Ciencias Informáticas especializado en desarrollo
                frontend con Angular y Next.js, en transición hacia el
                desarrollo fullstack. Actualmente expandiendo mis habilidades en
                backend con Node.js, Express y Sequelize para construcción de
                APIs REST. Busco oportunidades para aplicar y ampliar mis
                conocimientos en proyectos desafiantes, con el objetivo de
                consolidarme como desarrollador fullstack.
              </p>

              {/* Sección Contacto */}
              <div className="border-t pt-6 border-gray-200 dark:border-gray-700">
                <h3
                  className="text-xl font-semibold mb-4 flex items-center gap-2"
                  style={{ color: "var(--primary-color)" }}
                >
                  <Phone size={20} />
                  Contacto
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Mail size={20} style={{ color: "var(--primary-color)" }} />
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Email
                      </p>
                      <a
                        href="mailto:angelvaldes9710@gmail.com"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        style={{ color: "var(--primary-color)" }}
                      >
                        angelvaldes9710@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone
                      size={20}
                      style={{ color: "var(--primary-color)" }}
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Teléfono
                      </p>
                      <a
                        href="tel:+5354869089"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        style={{ color: "var(--primary-color)" }}
                      >
                        +53 54869089
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Linkedin
                      size={20}
                      style={{ color: "var(--primary-color)" }}
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        LinkedIn
                      </p>
                      <a
                        href="https://linkedin.com/in/angel-ernesto-valdes"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        style={{ color: "var(--primary-color)" }}
                      >
                        Angel Valdes
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Github
                      size={20}
                      style={{ color: "var(--primary-color)" }}
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        GitHub
                      </p>
                      <a
                        href="https://github.com/AngelE2610"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        style={{ color: "var(--primary-color)" }}
                      >
                        AngelE2610
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="pt-6 mb-6 m-auto">
            <h3
              className="text-xl font-semibold mb-4 flex items-center gap-2"
              style={{ color: "var(--primary-color)" }}
            >
              <Code size={20} className="themed-icon" />
              Tecnologías y Habilidades
            </h3>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
  {technologies.map((tech, index) => (
    <div 
      key={index}
      className="flex flex-col items-center gap-1 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-center"
    >
      <tech.icon 
        size={24} 
        style={{ color: tech.color }}
        title={tech.name}
      />
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
        {tech.name}
      </span>
      <span 
        className={`text-xs font-medium ${
          tech.level === 'Medio-Alto' ? 'text-green-600 dark:text-green-400' :
          tech.level === 'Medio' ? 'text-yellow-600 dark:text-yellow-400' :
          'text-blue-600 dark:text-blue-400'
        }`}
      >
        {tech.level}
      </span>
    </div>
  ))}
</div>
          </div>
        </div>
      </main>
    </div>
  );
}
