import { Grid } from "@mui/material";
import Panel from "./panel";
import ComponentTabs from "./componentTabs";

export default function PanelThree() {
    return (
        <Panel>
            <Grid>
                <h1>Panel 3</h1>
                <ComponentTabs />
            </Grid>
        </Panel>
    )
}