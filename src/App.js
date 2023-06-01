import React, {useState}from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from "@mui/material";
import MyButton from "./components/myButton";
import Header from "./components/header";
import Groceries from "./components/groceries/groceries";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        light: '#f9fbe7',
        main: '#cddc39',
        dark: '#827717',
        contrastText: '#000',
      },
      secondary: {
        light: '#fff3e0',
        main: '#ff9800',
        dark: '#e65100',
        contrastText: '#fff',
      },
      mode: darkMode ? "dark" : "light",
    },
  });

  const [globalCount, setGlobalCount] = useState(0)
  
  const appLayout = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkMode ? "#795548" : "#ffe0b2",
    backgroundImage: "url('./picture/donutPic.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100%"
  };

return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        globalCount={globalCount}
        setGlobalCount={setGlobalCount}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        enableStickyHeader
      />
      <div style={appLayout}>
        <Groceries />
        <MyButton globalCount={globalCount} setGlobalCount={setGlobalCount} />
      </div>
      <Box m={2} pt={3}>
        <MyButton globalCount={globalCount} setGlobalCount={setGlobalCount} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
