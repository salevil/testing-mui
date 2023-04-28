import React from "react"
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";


export default function ControlledRadioButtonGroup({value, onChange}) {
  return (
    <FormControl>
        <FormLabel id="demo-radio-buttons">Choose your component:</FormLabel>
        <RadioGroup
          aria-labelledby="radio-buttons"
          name="radio-buttons"
          value={value}
          onChange={onChange}
        >
          <FormControlLabel value="List" control={<Radio />} label="List of fruits and veggies" />
          <FormControlLabel value="Textfield" control={<Radio />} label="Text box input" /> 
        </RadioGroup>
    </FormControl>
);
}
