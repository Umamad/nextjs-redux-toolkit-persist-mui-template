import { ThemeOptions, createTheme } from "@mui/material/styles";

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
  },
};

const appTheme = createTheme(lightThemeOptions);

export default appTheme;
