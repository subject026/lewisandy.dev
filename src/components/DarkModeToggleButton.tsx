import { Component, createEffect, createSignal, onMount, Show } from "solid-js";

type TTheme = "light" | "dark";

const getThemeFromStorage = (): TTheme => {
  const theme = localStorage.getItem("lewisAndyTheme") ?? "light";
  return theme as TTheme;
};

const DarkModeToggleButton: Component = () => {
  const [theme, setTheme] = createSignal<TTheme>(getThemeFromStorage());
  const [isMounted, setIsMounted] = createSignal<boolean>(false);

  const handleClick = () => {
    setTheme(theme() === "light" ? "dark" : "light");
  };

  createEffect(() => {
    if (theme() === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("lewisAndyTheme", theme());
  });

  onMount(async () => {
    setIsMounted(true);
  });

  return (
    <Show when={isMounted()}>
      <button onClick={handleClick}>
        {theme() === "light" ? "Switch to Darkmode" : "Switch to Lightmode"}
      </button>
    </Show>
  );
};

export default DarkModeToggleButton;
