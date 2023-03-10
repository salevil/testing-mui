import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MyButton from "./myButton";


function Header({globalCount, setGlobalCount}) {

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
              <Typography color="inherit" variant="h5" component="h1">
                Testing MUI
            </Typography>
              <MyButton globalCount={globalCount} setGlobalCount={setGlobalCount} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
