import { Grid } from "@mui/material";
import Panel from "./panel";
import ComponentTabs from "./componentTabs";

export default function PanelOne({groceries, setGroceries, onGroceriesSubmit}) {
    return (
        <Panel>
            <Grid>
                <h1>Panel 1</h1>
                <ComponentTabs groceries={groceries} setGroceries={setGroceries} onGroceriesSubmit={onGroceriesSubmit} />
            </Grid>
        </Panel>
    )
}