import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MyButton from "./myButton";
import ThemeToggle from "./themeToggle";

function Header({globalCount, setGlobalCount,darkMode, onToggleTheme}) {

  return (
    <React.Fragment>
      <AppBar sx={{ display: 'flex', p: 1, borderRadius: 1 }}>
        <Toolbar>
          <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
            Testing MUI 
          </Typography>
          <MyButton globalCount={globalCount} setGlobalCount={setGlobalCount} />
          <ThemeToggle darkMode={darkMode} onToggleTheme={onToggleTheme} />      
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
