import React, { useState }from "react";
import FruitOrVeggie from "./components/fruitOrVeggie";
import ToggleListOrAdd from "./components/toggleListOrAdd";
import MyButton from "./components/myButton";
import Header from "./components/header";
import ControlledRadioButtonGroup from "./components/radioButton"
import CustomizedSelects from "./components/customizedSelects";
import useClickCount from "./hooks/useClickCount";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from "@mui/material";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });
  const [value, setValue] = useState("List")
  const [globalCount, setGlobalCount] = useClickCount();

  const [products, setProducts] = useState([
    { name: 'Cabbage', isFruit: false, id: 1 },
    { name: 'Garlic', isFruit: false, id: 2 },
    { name: 'Apple', isFruit: true, id: 3 },
  ]);

  const handleAddProduct = (name, isFruit) => {
    const newProduct = { name, isFruit, id: Date.now() };
    setProducts([...products, newProduct]);
  }
  
  const handleChange = (event) => {
      setValue(event.target.value);
  };
  
  
return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header globalCount={globalCount} setGlobalCount={setGlobalCount} darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Box m={2} pt={10}>
        <MyButton globalCount={globalCount} setGlobalCount={setGlobalCount} />
      </Box>
      <ToggleListOrAdd value={value} onChange={handleChange} />
      <div>
        {value=== "List" ?(<FruitOrVeggie products={products} />) : (<CustomizedSelects onAddProduct={handleAddProduct} />)}
      </div>
      <Box m={2} pt={3}>
      <MyButton globalCount={globalCount} setGlobalCount={setGlobalCount} />
      </Box>
      <ControlledRadioButtonGroup value={value} onChange={handleChange}/>
    </ThemeProvider>
  );
}

export default App;
