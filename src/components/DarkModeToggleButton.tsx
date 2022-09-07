import { Component, createEffect, createSignal, onMount, Show } from "solid-js";

type TTheme = "light" | "dark";

const ToggleOffIcon = () => {
  return (
    <svg
      class="h-10 w-10 fill-inherit"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6Zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4ZM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z" />
    </svg>
  );
};

const ToggleOnIcon = () => {
  return (
    <svg
      class="h-10 w-10 fill-inherit"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6Zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4Zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z" />
    </svg>
  );
};

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
      <button
        onClick={handleClick}
        class="fill-neutral-500 dark:fill-neutral-500"
      >
        {theme() === "light" ? <ToggleOnIcon /> : <ToggleOffIcon />}
      </button>
    </Show>
  );
};

export default DarkModeToggleButton;
