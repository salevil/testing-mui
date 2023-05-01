import { Grid } from "@mui/material";
import Panel from "./panel";
import ControlledRadioButtonGroup from "./controlledRadioButtonGroup";
import FruitOrVeggies from "./fruitOrVeggies";
import AddFruitOrVeggies from "./addFruitOrVeggies";

export default function PanelTwo({value, handleChange}) {
    console.log(">>>>>>", handleChange, value);
    return (
        <Panel>
            <Grid>
                <h1>Panel 5</h1>
                <ControlledRadioButtonGroup value={value} onChange={handleChange} />
                <div>
                    {value=== "List" ?(<FruitOrVeggies />) : (<AddFruitOrVeggies />)}
                </div>
            </Grid>
        </Panel>
    )
}