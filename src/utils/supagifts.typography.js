// @flow
import type { OptionsType } from "Types";
import gray from "gray-percentage";
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants";

const theme: OptionsType = {
  title: "Funston",
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: "Arapey",
      styles: ["400", "800"]
    },
    {
      name: "Oxygen",
      styles: ["300", "700"]
    }
  ],
  headerFontFamily: ["Arapey", "sans-serif"],
  bodyFontFamily: ["Oxygen", "georgia", "sans-serif"],
  bodyColor: "hsla(0,0%,0%,0.87)",
  headerWeight: 800,
  bodyWeight: 300,
  boldWeight: 700,
  overrideStyles: ({ scale, rhythm }) => ({
    html: {
      "-webkit-font-smoothing": "antialiased"
    },
    body: {
      letterSpacing: ".03em"
    },
    a: {
      color: "inherit"
    },
    "a:hover": {
      color: "#3498DB"
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(40),
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(3 / 16)} solid ${gray(13)}`
    },
    [MOBILE_MEDIA_QUERY]: {
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        paddingLeft: rhythm(9 / 16),
        marginRight: 0
      }
    }
  })
};

export default theme;
