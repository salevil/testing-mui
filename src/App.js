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
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("List")
  
  const handleChange = (event) => {
      setValue(event.target.value);
  };
  function handleClick() {
    setCount(count + 1);
  }

return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header count={count} onClick={handleClick}/>
      <Box m={2} pt={10}>
        <MyButton count={count} onClick={handleClick} />
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
        <MyButton count={count} onClick={handleClick}/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
