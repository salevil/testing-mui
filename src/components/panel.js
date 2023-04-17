import React from 'react';
import { Paper } from '@mui/material';


const panelStyling = { 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh'
    };

export default function Panel(props) {
    return (
                <Paper elevation={3} style={{ width: '400px', minHeight: '320px', padding: '24px', margin: '24px'}}>
                    {props.children}
                </Paper>
    );
}