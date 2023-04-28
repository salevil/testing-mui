import React, {useState}from "react";
import TextField from "@mui/material/TextField";
import FruitOrVeggie from "./components/fruitsOrVeggies";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from "@mui/material";
import MyButton from "./components/myButton";
import Header from "./components/header";
import ControlledRadioButtonGroup from "./components/controlledRadioButtonGroup"
import PanelOne from "./components/panelOne";
import PanelTwo from "./components/panelTwo";
import PanelThree from "./components/panelThree";
import PanelFour from "./components/panelFour";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

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
    backgroundColor: "#ffe0b2",
    backgroundImage: "url('./picture/img0.jpeg')",
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
        onToggleTheme={handleToggleTheme}
        enableStickyHeader
      />
      <div style={appLayout}>
        <PanelOne />
        <MyButton globalCount={globalCount} setGlobalCount={setGlobalCount} />
        <PanelTwo value={value} onChange={handleChange} />
        <MyButton globalCount={globalCount} setGlobalCount={setGlobalCount} />
        <PanelThree />
        <h1>Panel 4</h1>
        <ControlledRadioButtonGroup value={value} onChange={handleChange}/>
        <div>
          {value=== "List" ?(<FruitOrVeggie />) : (<TextField
              label="Enter text here:"
              variant="filled"
              multiline
              rows={5}
            />)}
        </div>
        <PanelFour />
      </div>
      <Box m={2} pt={3}>
        <MyButton globalCount={globalCount} setGlobalCount={setGlobalCount} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
