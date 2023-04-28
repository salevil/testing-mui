import { Grid } from "@mui/material";
import Panel from "./panel";
import ComponentTabs from "./componentTabs";

export default function PanelOne() {
    return (
        <Panel>
            <Grid>
                <h1>Panel 1</h1>
                <ComponentTabs />
            </Grid>
        </Panel>
    )
}