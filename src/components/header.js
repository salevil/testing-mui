import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MyButton from "./myButton";


function Header({count, handleClick}) {

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
            <Typography color="inherit" variant="h5" component="h1">
                Testing MUI
            </Typography>
            <Grid container justify="flex-end">
              <MyButton count={count} onClick={handleClick} />
            </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
