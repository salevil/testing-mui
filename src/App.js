import React, {useState}from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from "@mui/material";
import MyButton from "./components/myButton";
import Header from "./components/header";
import PanelOne from "./components/panelOne";
import PanelTwo from "./components/panelTwo";
import PanelThree from "./components/panelThree";
import PanelFour from "./components/panelFour";
import PanelFive from "./components/panelFive";

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

  const [value, setValue] = useState("List")
  const [globalCount, setGlobalCount] = useState(0)
  
  const handleChange = (event) => {
      setValue(event.target.value);
  };
  
  const appLayout = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkMode ? "#795548" : "#ffe0b2",
    backgroundImage: "url('./picture/img0.jpeg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100%"
  };
console.log("App>>>>", handleChange, value);
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
        <PanelOne />
        <MyButton globalCount={globalCount} setGlobalCount={setGlobalCount} />
        <PanelTwo value={value} handleChange={handleChange} />
        <MyButton globalCount={globalCount} setGlobalCount={setGlobalCount} />
        <PanelThree />
        <PanelFour />
        <PanelFive value={value} handleChange={handleChange} />
      </div>
      <Box m={2} pt={3}>
        <MyButton globalCount={globalCount} setGlobalCount={setGlobalCount} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
