import { Grid } from "@mui/material";
import Panel from "./panel";
import ControlledRadioButtonGroup from "./controlledRadioButtonGroup";
import FruitOrVeggie from "./fruitsOrVeggies";
import AddFruitOrVeggies from "./addFruitOrVeggies";

export default function PanelTwo({value, handleChange}) {
    console.log(">>>>>>", handleChange, value);
    return (
        <Panel>
            <Grid>
                <h1>Panel 2</h1>
                <ControlledRadioButtonGroup value={value} onChange={handleChange} />
                <div>
                    {value=== "List" ?(<FruitOrVeggie />) : (<AddFruitOrVeggies />)}
                </div>
            </Grid>
        </Panel>
    )
}