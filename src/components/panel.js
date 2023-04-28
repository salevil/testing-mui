import React from 'react';
import { Paper } from '@mui/material';


const panelStyling = {
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    // backgroundColor: '#e0f2f1',
    width: '1000px',
    minHeight: '320px',
    padding: '24px',
    margin: '24px'
    };

export default function Panel(props) {
    return (
                <Paper elevation={3} style={panelStyling}>
                    {props.children}
                </Paper>
    );
}