import Counter from "./components/Counter";
import LightDarkTheme from "./components/LightDarkTheme";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div
      className={`h-screen flex justify-center items-center font-montserrat transition-all duration-500
      ${
        theme === "light"
          ? "bg-[#fefffe] text-[#000000]"
          : "dark:bg-[#23272f] dark:text-[#ebf4f5]"
      }`}
    >
      <LightDarkTheme toggleTheme={toggleTheme} theme={theme} />
      <Counter />
    </div>
  );
};

export default App;
