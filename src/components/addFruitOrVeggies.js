import { TextField } from "@mui/material";

export default function AddFruitOrVeggies({value, handleChange}) {
    console.log(">>>>>>", handleChange, value);
    return (
        <TextField 
            label="Enter text here:"
            variant="filled"
            multiline
            rows={5}
        />
    )
}