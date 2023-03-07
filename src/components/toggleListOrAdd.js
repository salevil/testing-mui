import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { styled } from "@mui/system";

const StyledbButton = styled(ToggleButton) ({
height:24,
})

export default function ToggleListOrAdd({value, onChange}) {

    return (    
        <ToggleButtonGroup
        color="primary"
        // value={alignment}
        exclusive
        aria-label="Platform"
        value={value}
        onChange={onChange}
        >
        <StyledbButton size="small" value="List" sx={{ bgcolor: value === "List" ? 'primary.main' : 'background.paper', color: value === "List" ? 'white' : 'inherit'  }}>List of produce</StyledbButton>
        <StyledbButton size="small" value="AddToList" sx={{ bgcolor: value === "AddToList" ? 'primary.main' : 'background.paper', color: value === "AddToList" ? 'white' : 'inherit' }}>Add produce</StyledbButton>
        </ToggleButtonGroup>
    )
}
