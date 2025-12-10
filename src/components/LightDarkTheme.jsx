import { Moon, Sun } from "lucide-react";

const LightDarkTheme = ({ toggleTheme, theme }) => {
  return (
    <div className="fixed top-8 right-8 shadow-sm shadow-[#000000] rounded-md">
      <button
        className="hover:scale-105 transition cursor-pointer py-2 px-4 rounded-md"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <Moon size={20} strokeWidth={2} />
        ) : (
          <Sun size={20} strokeWidth={2} />
        )}
      </button>
    </div>
  );
};

export default LightDarkTheme;
