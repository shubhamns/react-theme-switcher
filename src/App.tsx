import { useEffect } from "react";
import { ThemeProvider, useTheme } from "react-theme-switcher-kit";

const AppContent = () => {
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    toggleTheme(savedTheme);
  }, [toggleTheme]);

  const setTheme = (theme: string) => {
    toggleTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Dynamic Theme Example</h1>
      <p>Select a theme to see the effect:</p>
      <div>
        <button onClick={() => setTheme("light")}>Light Theme</button>
        <button onClick={() => setTheme("dark")}>Dark Theme</button>
        <button onClick={() => setTheme("custom")}>Custom Theme</button>
      </div>
    </div>
  );
};

const App = () => (
  <ThemeProvider
    additionalThemes={{ custom: { background: "#f5e6e8", text: "#5f4b8b" }}  }
  >
    <AppContent />
  </ThemeProvider>
);

export default App;
