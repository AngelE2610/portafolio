"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [themeColor, setThemeColor] = useState("hsl(214,84%,56%)");

  // Efecto para aplicar el modo oscuro/claro y color al documento
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    document.documentElement.style.setProperty('--primary-color', themeColor);
  }, [darkMode, themeColor]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleColorChange = (color: any) => {
    setThemeColor(color);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <header className="header">
        <div className="switches">
          <div className="toggle-theme" onClick={toggleDarkMode}>
            <img 
              id="toggle-icon" 
              src={darkMode ? "/assets/icons/sun.svg" : "/assets/icons/moon.svg"} 
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

      {/* Contenido de ejemplo para probar los estilos */}
      <main className="main-content">
        <h1>Mi Aplicación Next.js</h1>
        <p>Este es un texto de ejemplo que cambiará de color según la selección.</p>
        <button className="primary-button">Botón de ejemplo</button>
      </main>
    </div>
  );
}