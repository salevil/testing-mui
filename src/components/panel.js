import React from 'react';
import { Paper } from '@mui/material';


const panelStyling = {
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    width: '1000px',
    minHeight: '320px',
    padding: '5px 24px 24px 24px',
    margin: '24px'
    };

export default function Panel(props) {
    return (
                <Paper elevation={3} style={panelStyling}>
                    {props.children}
                </Paper>
    );
}