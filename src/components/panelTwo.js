import { Grid, TextField } from "@mui/material";
import Panel from "./panel";
import ControlledRadioButtonGroup from "./radioButton";
import FruitOrVeggie from "./fruitsOrVeggies";

export default function PanelTwo(value, handleChange) {
    return (
        <Panel>
            <Grid>
                <h1>Panel 2</h1>
                <ControlledRadioButtonGroup value={value} onChange={handleChange} />
                <div>
                {value=== "List" ?(<FruitOrVeggie />) : (<TextField
                    label="Enter text here:"
                    variant="filled"
                    multiline
                    rows={5}
                    />)}
                </div>
            </Grid>
        </Panel>
    )
}