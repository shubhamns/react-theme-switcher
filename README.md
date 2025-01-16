## Installation

Install the library using npm or yarn:

```bash
npm install react-theme-switcher-kit
```

or

```bash
yarn add react-theme-switcher-kit
```

## Usage

Here's a step-by-step guide to integrating react-theme-switcher-kit into your React application.

### 1. Wrap Your App with ThemeProvider

Wrap your application with the ThemeProvider provided by the library:

```jsx
import { ThemeProvider } from "react-theme-switcher-kit";
import AppContent from "./AppContent";

const App = () => (
  <ThemeProvider
    additionalThemes={{ custom: { background: "#f5e6e8", text: "#5f4b8b" } }}
  >
    <AppContent />
  </ThemeProvider>
);

export default App;
```

The ThemeProvider accepts an optional `additionalThemes` prop, allowing you to define custom themes beyond the default light and dark options.

### 2. Use the useTheme Hook to Toggle Themes

Within your components, use the useTheme hook to access the toggleTheme function and other utilities:

```jsx
import { useEffect } from "react";
import { useTheme } from "react-theme-switcher-kit";

const AppContent = () => {
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    toggleTheme(savedTheme);
  }, [toggleTheme]);

  const setTheme = (theme) => {
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

export default AppContent;
```

### 3. Define Custom Themes (Optional)

To add custom themes, pass them as the `additionalThemes` prop to the ThemeProvider. Each custom theme should define its own background and text properties:

```jsx
<ThemeProvider
  additionalThemes={{ custom: { background: "#f5e6e8", text: "#5f4b8b" } }}
>
  {children}
</ThemeProvider>
```

## API Reference

### ThemeProvider

Wraps the application and provides context for theme management.

**Props:**
- `additionalThemes` (optional): An object defining custom themes. Each theme should specify background and text properties.

### useTheme

A React hook that provides theme management utilities.

**Returned Values:**
- `toggleTheme(theme: string)`: Function to switch to a specific theme
- `currentTheme`: The name of the currently active theme
