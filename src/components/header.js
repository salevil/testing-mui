import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MyButton from "./myButton";
import DarkThemeSwitch from './darkThemeSwitch';
import HandymanTwoToneIcon from '@mui/icons-material/HandymanTwoTone';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function Header({globalCount, setGlobalCount,darkMode, setDarkMode}) {

  return (
    <>
    <AppBar sx={{ display: 'flex', p: 1, borderRadius: 1 }} position="fixed">
        <Toolbar>
          <HandymanTwoToneIcon />
          <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
            Testing MUI 
          </Typography>
          <MyButton globalCount={globalCount} setGlobalCount={setGlobalCount} />
          <DarkThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />      
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
}

export default Header;
