import React, {useState, useContext}from "react";
import TextField from "@mui/material/TextField";
import FruitOrVeggie from "./components/fruitsOrVeggies";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box} from "@mui/material";
import MyButton from "./components/myButton";
import Header from "./components/header";
import ControlledRadioButtonGroup from "./components/radioButton"
import useClickCount from "./hooks/useClickCount";
import { ClickCountContext } from "./components/clickCountContext";



function App() {
  const theme = createTheme();
  const [value, setValue] = useState("List")
  const { count } = useContext(ClickCountContext);
  
  const handleChange = (event) => {
      setValue(event.target.value);
  };
  
  
return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ClickCountContext count={count} setCount={setCount}>
        <Header count={count} setCount={setCount}/>
        <Box m={2} pt={10}>
          <MyButton count={count} setCount={setCount} />
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
          <MyButton count={count} setCount={setCount} />
        </Box>
      </ClickCountContext>
    </ThemeProvider>
  );
}

export default App;
