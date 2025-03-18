import React, { useState, useEffect } from "react";
import "./styles.css";

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // Fall back to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Update document attribute and localStorage when theme changes
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    );
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="theme-container">
      <div className="theme-content">
        <h3 className="theme-title">{isDark ? "Dark Mode" : "Light Mode"}</h3>
        <div className="toggle-wrapper">
          <button
            onClick={toggleTheme}
            className="theme-toggle-button"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <div className="toggle-track">
              <div
                className={`toggle-thumb ${isDark ? "toggle-thumb-dark" : ""}`}
              ></div>
            </div>
          </button>
        </div>
        <p className="theme-description">
          Click the toggle to switch between light and dark mode
        </p>
      </div>
    </div>
  );
};

export default DarkModeToggle;
