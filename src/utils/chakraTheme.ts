// theme.ts

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
// const config: ThemeConfig = {
//   initialColorMode: "dark",
//   useSystemColorMode: false,
// };

// 3. extend the theme
const theme = extendTheme({
  colors: {
    dark: {
      100: "#232323",
      200: "#4d4d4d",
    },
    text: {
      100: "#fff",
      200: "#808080",
    },
  },
});

export default theme;
