import { useState } from "react";

import { Outlet } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { christmasTheme, darkTheme, lightTheme } from "./lib/theme.ts";

import Header from "./ui/Header.tsx";

export type Themes = "light" | "dark" | "christmas";
export const themes = ["light", "dark", "christmas"];

export default function RootLayout() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const handleThemeChange = (theme: string) => {
    switch (theme) {
      case "light":
        setCurrentTheme(lightTheme);
        break;
      case "dark":
        setCurrentTheme(darkTheme);
        break;
      case "christmas":
        setCurrentTheme(christmasTheme);
        break;

      default:
        console.error("failed to validate theme");
        break;
    }
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Header themeChange={handleThemeChange} />
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}
