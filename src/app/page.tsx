"use client";
import { useState, useEffect, useMemo } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Code, GraduationCap, Briefcase, Building, BarChart3, Download, Languages } from "lucide-react";
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
  SiJira,
} from "react-icons/si";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LuBriefcase } from "react-icons/lu";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Sistema de traducciones
const translations = {
  es: {
    aboutMe: "Sobre Mí",
    aboutMeText: "Ingeniero en Ciencias Informáticas especializado en desarrollo frontend con Angular y Next.js, en transición hacia el desarrollo fullstack. Actualmente expandiendo mis habilidades en backend con Node.js, Express y Sequelize para construcción de APIs REST. Busco oportunidades para aplicar y ampliar mis conocimientos en proyectos desafiantes, con el objetivo de consolidarme como desarrollador fullstack.",
    contact: "Contacto",
    downloadCV: "Descargar CV",
    email: "Email",
    phone: "Teléfono",
    technologies: "Tecnologías y Habilidades",
    education: "Formación",
    educationText: "Ingeniero en Ciencias Informáticas - Universidad de las Ciencias Informáticas de Cuba | Graduado: Diciembre 2024",
    experience: "Experiencia",
    experienceText: "Centro de Informatización Gobierno-Empresa (UCI)",
    experienceDuration: "Enero 2025 - Presente · Desarrollador Frontend",
    projects: "Proyectos",
    location: "UCI/Habana, Cuba",
    noImages: "No hay imágenes",
    viewRepo: "Ver repositorio en GitHub",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    spanish: "Español",
    english: "English",
    projectDescriptions: {
      SGIndPAn: "Sistema para gestionar diferentes panaderias, donde se controlan productos, turnos, trabajadores y ventas. El sistema muestra resumenes de ventas mensuales y anuales ademas de permitir mover los trabajadores entre los difernetes turnos."
    },
    skillLevels: {
      "Medio-Alto": "Medio-Alto",
      "Medio": "Medio",
      "Medio-Bajo": "Medio-Bajo"
    }
  },
  en: {
    aboutMe: "About Me",
    aboutMeText: "Computer Science Engineer specialized in frontend development with Angular and Next.js, transitioning to fullstack development. Currently expanding my backend skills with Node.js, Express and Sequelize for REST API construction. Seeking opportunities to apply and expand my knowledge in challenging projects, with the goal of establishing myself as a fullstack developer.",
    contact: "Contact",
    downloadCV: "Download CV",
    email: "Email",
    phone: "Phone",
    technologies: "Technologies and Skills",
    education: "Education",
    educationText: "Computer Science Engineer - University of Informatics Sciences of Cuba | Graduated: December 2024",
    experience: "Experience",
    experienceText: "Government-Business Informatization Center (UCI)",
    experienceDuration: "January 2025 - Present · Frontend Developer",
    projects: "Projects",
    location: "UCI/Havana, Cuba",
    noImages: "No images",
    viewRepo: "View repository on GitHub",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    spanish: "Spanish",
    english: "English",
    projectDescriptions: {
      SGIndPAn: "System to manage different bakeries, where products, shifts, workers and sales are controlled. The system shows monthly and annual sales summaries and allows moving workers between different shifts."
    },
    skillLevels: {
      "Medio-Alto": "Medium-High",
      "Medio": "Medium",
      "Medio-Bajo": "Medium-Low"
    }
  }
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [themeColor, setThemeColor] = useState("hsl(214,84%,56%)");
  const [isSpanish, setIsSpanish] = useState(true);

  const t = isSpanish ? translations.es : translations.en;

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

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
  };

  const handleColorChange = (color: any) => {
    setThemeColor(color);
  };

  const technologies = useMemo(() => [
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Git", icon: SiGit, color: "#F05032" },
  ], [isSpanish]);

  const proyectos = useMemo(() => [
    {
      name: "SGIndPAn", 
      imagenes: ["SGINDPAn.png","pan1.png","pan2.png"], 
      description: t.projectDescriptions.SGIndPAn, 
      technologies: [
        technologies[0], technologies[2], technologies[3], technologies[4], technologies[6],
      ],
      githubUrl: "https://github.com/AngelE2610/SGIndPan-master"
    }
  ], [technologies, t]);

  const ProjectCard = ({ proyecto }: { proyecto: typeof proyectos[0] }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleImageClick = (index: number) => {
      setSelectedImageIndex(index);
      setIsDialogOpen(true);
    };

    return (
      <>
        <Card className="flex flex-col h-full w-full max-w-none">
          <CardHeader className="flex-shrink-0 pb-3">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <CardTitle className="text-xl font-bold line-clamp-1">{proyecto.name}</CardTitle>
                <CardDescription className="line-clamp-3 min-h-[60px] text-sm leading-relaxed mt-2">
                  {proyecto.description}
                </CardDescription>
              </div>
              {proyecto.githubUrl && (
                <a 
                  href={proyecto.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors hover:scale-110 transform duration-200"
                  title={t.viewRepo}
                >
                  <Github 
                    size={20} 
                    className="text-gray-700 dark:text-gray-300"
                  />
                </a>
              )}
            </div>
          </CardHeader>
          
          <CardContent className="flex-grow flex items-center justify-center p-4">
            {proyecto.imagenes.length > 0 ? (
              <Carousel className="w-full max-w-full">
                <CarouselContent>
                  {proyecto.imagenes.map((imagen, index) => (
                    <CarouselItem key={index}>
                      <div 
                        className="w-full h-56 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center p-1 cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => handleImageClick(index)}
                      >
                        <img 
                          src={imagen} 
                          alt={`${isSpanish ? 'Imagen' : 'Image'} ${index + 1} ${isSpanish ? 'del proyecto' : 'of project'} ${proyecto.name}`}
                          className="w-full h-full object-contain rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {proyecto.imagenes.length > 1 && (
                  <>
                    <CarouselPrevious className="h-6 w-6 -translate-y-1/2" />
                    <CarouselNext className="h-6 w-6 -translate-y-1/2" />
                  </>
                )}
              </Carousel>
            ) : (
              <div className="w-full h-56 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">{t.noImages}</span>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex-shrink-0 flex flex-wrap gap-2 justify-center pt-4 border-t">
            {proyecto.technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <span 
                  key={`${tech.name}-${index}`}
                  className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:scale-110 transition-transform duration-200"
                  title={tech.name}
                >
                  <IconComponent style={{ color: tech.color }} size={20} />
                </span>
              );
            })}
          </CardFooter>
        </Card>

        {/* Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl min-w-[50vw] min-h-[50vh] bg-transparent border-none shadow-none">
            <DialogTitle></DialogTitle>
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src={proyecto.imagenes[selectedImageIndex]} 
                alt={`${isSpanish ? 'Imagen' : 'Image'} ${selectedImageIndex + 1} ${isSpanish ? 'del proyecto' : 'of project'} ${proyecto.name}`}
                className="max-w-full max-h-[80vh] object-contain min-w-[50vw] min-h-[50vh] rounded-lg"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {selectedImageIndex + 1} / {proyecto.imagenes.length}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  };

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
              {darkMode ? t.lightMode : t.darkMode}
            </p>
          </div>
        </div>

        {/* Switch de Idioma */}
        <div className="switches">
          <div className="toggle-theme" onClick={toggleLanguage}>
            <Languages
              size={20}
              className="toggle-theme_icon"
              style={{ color: "var(--primary-color)" }}
            />
            <p id="toggle-text" className="toggle-theme_text">
              {isSpanish ? t.spanish : t.english}
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

      <main className="main-content px-4 md:px-8 py-4 w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 w-full mb-8">
          {/* Foto */}
          <div className="w-full md:w-2/6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 h-full flex flex-col items-center text-center">
              <div className="aspect-square bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4 w-full overflow-hidden">
                <img
                  src="angel.jpg"
                  alt={isSpanish ? "Foto de Perfil" : "Profile Photo"}
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
                <span className="text-sm">{t.location}</span>
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
                {t.aboutMe}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {t.aboutMeText}
              </p>

              {/* Sección Contacto */}
              <div className="border-t pt-6 border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <h3
                    className="text-xl font-semibold flex items-center gap-2"
                    style={{ color: "var(--primary-color)" }}
                  >
                    <Phone size={20} />
                    {t.contact}
                  </h3>

                  {/* Botón de descarga de CV */}
                  <a
                    href="/Angel E. Valdes CV.pdf"
                    download="Angel_Valdes_CV.pdf"
                    className="flex items-center gap-2 px-4 py-2 rounded-md text-white font-medium hover:opacity-90 transition-opacity text-sm"
                    style={{ backgroundColor: "var(--primary-color)" }}
                  >
                    <Download size={16} />
                    {t.downloadCV}
                  </a>
                </div>

                {/* Grid de información de contacto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Mail size={20} style={{ color: "var(--primary-color)" }} />
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {t.email}
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
                        {t.phone}
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

        {/* Tecnologías */}
        <div className="w-full mb-8">
          <div className="pt-6">
            <h3
              className="text-xl font-semibold mb-6 flex items-center gap-2"
              style={{ color: "var(--primary-color)" }}
            >
              <Code size={20} className="themed-icon" />
              {t.technologies}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Formación y Experiencia */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 justify-items-center">
          {/* Formación */}
          <div className="pt-6">
            <h3
              className="text-xl font-semibold mb-6 flex items-center gap-2"
              style={{ color: "var(--primary-color)" }}
            >
              <GraduationCap size={20} className="themed-icon" />
              {t.education}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {t.educationText}
            </p>
          </div>

          {/* Experiencia */}
          <div className="pt-6">
            <h3
              className="text-xl font-semibold mb-6 flex items-center gap-2"
              style={{ color: "var(--primary-color)" }}
            >
              <BarChart3 size={20} className="themed-icon" />
              {t.experience}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {t.experienceText} <br />
              {t.experienceDuration} (
              <SiAngular size={16} color="#DD0031" className="inline mx-1" />
              <small>v11</small>)
            </p>
          </div>
        </div>

        {/* Proyectos */}
        <div className="w-full">
          <div className="pt-6">
            <h3
              className="text-xl font-semibold mb-6 flex items-center gap-2"
              style={{ color: "var(--primary-color)" }}
            >
              <LuBriefcase size={20} className="themed-icon" />
              {t.projects}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
              {proyectos.map((proyecto, index) => (
                <ProjectCard key={index} proyecto={proyecto} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}