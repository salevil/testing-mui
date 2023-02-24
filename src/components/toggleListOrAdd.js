import { ToggleButtonGroup, ToggleButton } from "@mui/material"

export default function ToggleListOrAdd({value, handleChange}) {
    
return (    
    <ToggleButtonGroup
    color="primary"
    // value={alignment}
    exclusive
    onChange={handleChange}
    aria-label="Platform"
    >
    <ToggleButton value="List" sx={{ bgcolor: value === "List" ? 'primary.main' : 'background.paper', color: value === "List" ? 'white' : 'inherit'  }}>List of produce</ToggleButton>
    <ToggleButton value="AddToList" sx={{ bgcolor: value === "AddToList" ? 'primary.main' : 'background.paper', color: value === "AddToList" ? 'white' : 'inherit' }}>Add produce</ToggleButton>
    </ToggleButtonGroup>
)
}


