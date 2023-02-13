import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MyButton from "./myButton";


function Header({count, handleClick}) {

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
            <Typography color="inherit" variant="h5" component="h1">
                Testing MUI
            </Typography>
            <MyButton count={count} onClick={handleClick} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
