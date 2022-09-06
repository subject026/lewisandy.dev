import { Component, createEffect, createSignal } from "solid-js";

interface IProps {
  children?: string;
}

const Button: Component<IProps> = ({ children }) => {
  const [theme, setTheme] = createSignal(
    localStorage.getItem("theme") ?? "light"
  );

  const handleClick = () => {
    console.log(theme());

    setTheme(theme() === "light" ? "dark" : "light");
  };

  createEffect(() => {
    if (theme() === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme());
  });

  const buttonText =
    theme() === "light" ? "Switch to Darkmode" : "Switch to Lightmode";

  return <button onClick={handleClick}>{buttonText}</button>;
};

export default Button;
