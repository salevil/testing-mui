import { ToggleButtonGroup, ToggleButton } from "@mui/material"

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
        <ToggleButton size="small" value="List" sx={{ bgcolor: value === "List" ? 'primary.main' : 'background.paper', color: value === "List" ? 'white' : 'inherit'  }}>List of produce</ToggleButton>
        <ToggleButton size="small" value="AddToList" sx={{ bgcolor: value === "AddToList" ? 'primary.main' : 'background.paper', color: value === "AddToList" ? 'white' : 'inherit' }}>Add produce</ToggleButton>
        </ToggleButtonGroup>
    )
}
