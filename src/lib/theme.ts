import { createTheme } from "@mui/material/styles";

// Common typography and shape settings
const commonSettings = {
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
};

// Light theme
export const lightTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: "light",
    primary: {
      main: "#11CBD7", // Primary color (blue)
      light: "#5ce4ed", // Lighter shade of primary
      dark: "#0a929b", // Darker shade of primary
    },
    secondary: {
      main: "#f5007b", // Secondary color
      light: "#ff338f", // Lighter shade of secondary
      dark: "#ab0054", // Darker shade of secondary
    },
    background: {
      default: "#f9f9f9", // Off-white background
      paper: "#ffffff", // White for paper elements
    },
  },
});

// Dark theme
export const darkTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: "dark",
    primary: {
      main: "#FF204E", // Primary color (red)
      light: "#ff5775", // Lighter shade of primary
      dark: "#b21534", // Darker shade of primary
    },
    secondary: {
      main: "#ce93d8", // Secondary color (purple)
      light: "#e3b5e6", // Lighter shade of secondary
      dark: "#9c64a6", // Darker shade of secondary
    },
    background: {
      default: "#121212", // Dark background
      paper: "#1e1e1e", // Slightly lighter for elevated elements
    },
    text: {
      primary: "#ffffff", // Text color for main content
      secondary: "#b0b0b0", // Text color for less emphasized content
    },
  },
});

// christmas theme
export const christmasTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: "light",
    primary: {
      main: "#E63946", // Christmas red for primary actions
      light: "#f06271", // Lighter red for hover effects
      dark: "#a02732", // Darker red for focus or active states
    },
    secondary: {
      main: "#48C774", // Lighter Christmas green for accents
      light: "#76E39A", // Even lighter green for hover effects
      dark: "#35985A", // Slightly darker green for emphasis
    },
    background: {
      default: "#F8F9FA", // Snowy white background
      paper: "#ffffff", // Bright white for elevated surfaces
    },
    text: {
      primary: "#1B1B1B", // Dark text for readability
      secondary: "#495057", // Subtle grey for secondary text
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { color: "#E63946" }, // Red for headings
    h2: { color: "#48C774" }, // Green for subheadings
  },
});
