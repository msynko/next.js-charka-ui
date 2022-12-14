import { extendTheme, theme as base } from "@chakra-ui/react"

export const theme = extendTheme({
  styles: {
    global: props => ({
      "html, body": {
        fontSize: "sm",
        color: props.colorMode === "dark" ? "#FFFFFF" : "black",
        background: props.colorMode === "dark" ? "#0D0D0D" : "#FFFFFF",
      },
    }),
  },
  breakpoints: {
    sm: "751px",
    md: "1200px",
    lg: "1441px",
    xl: "1999px",
  },
  fonts: {
    heading: `'Roboto', ${base.fonts.heading}`,
    body: `'Open Sans', ${base.fonts.body}`,
    inter: `'Inter', sans-serif`,
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.75rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.5rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    tiny: 1.063,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: 2,
    tallest: 4.102,
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.15em",
  },

  colors: {
    white: "#FFFFFF",
    black: "#1E1E1E",
    lightBlack: "#282D33",
    lightGrey: "#E1E1E1",
    grey: "#7E8489",
    purple: "#7A76FF",
  },
})
