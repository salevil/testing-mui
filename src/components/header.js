import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MyButton from "./myButton";


function Header({count, onClick}) {

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
              <Typography color="inherit" variant="h5" component="h1">
                Testing MUI
            </Typography>
              <MyButton count={count} onClick={onClick} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
