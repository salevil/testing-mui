import React, {useState}from "react";
import TextField from "@mui/material/TextField";
import FruitOrVeggie from "./components/fruitsOrVeggies";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box} from "@mui/material";
import MyButton from "./components/myButton";
import Header from "./components/header";
import ControlledRadioButtonGroup from "./components/radioButton"

function App() {
  const theme = createTheme();
  const [value, setValue] = useState("List")
  const [globalCount, setGlobalCount] = useState(0)
  
  const handleChange = (event) => {
      setValue(event.target.value);
  };
  
return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header globalCount={globalCount} setGlobalCount={setGlobalCount}/>
      <Box m={2} pt={10}>
        <MyButton globalCount={globalCount} setGlobalCount={setGlobalCount} />
      </Box>
      <ControlledRadioButtonGroup value={value} onChange={handleChange}/>
      <div>
        {value=== "List" ?(<FruitOrVeggie />) : (<TextField
            label="Enter text here:"
            variant="filled"
            multiline
            rows={5}
          />)}
      </div>
      <Box m={2} pt={3}>
        <MyButton globalCount={globalCount} setGlobalCount={setGlobalCount} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
