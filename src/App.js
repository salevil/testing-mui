import React, {useState}from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from "@mui/material";
import MyButton from "./components/myButton";
import Header from "./components/header";
import GroceryListMaker from "./components/groceries/groceryListMaker";
import GroceryList from "./components/groceries/groceryList";

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
  const [groceries, setGroceries] = useState([
  { name: 'Cabbage', category: "produce", id: 1 },
  { name: 'Garlic', category: "produce", id: 2 },
  { name: 'Apple', category: "produce", id: 3 },
  { name: 'Toilet Paper', category: "house supplies", id: 4 }
  ]);
  const[categories, setCategories] = useState([
    {name: "produce", id: 1},
    {name: "dairy", id: 2},
    {name: "meat", id: 3},
    {name: "house supplies", id: 4}
  ])

  const handleChange = (event) => {
      setValue(event.target.value);
  };
  
  const handleGroceriesSubmit = (newItem) => {
    setGroceries([...groceries, newItem]);
  }
  const handleCategorySubmit = (newCategory) => {
    setCategories([...categories, newCategory]);
  }

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
        <GroceryList />
        <MyButton globalCount={globalCount} setGlobalCount={setGlobalCount} />
        <GroceryListMaker
          groceries={groceries}
          setGroceries={setGroceries}
          categories={categories}
          setCategories={setCategories}
          onGroceriesSubmit={handleGroceriesSubmit}
          onCategorySubmit={handleCategorySubmit}
        />
        <MyButton globalCount={globalCount} setGlobalCount={setGlobalCount} />
      </div>
      <Box m={2} pt={3}>
        <MyButton globalCount={globalCount} setGlobalCount={setGlobalCount} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
