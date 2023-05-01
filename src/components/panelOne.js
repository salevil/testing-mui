import { Grid } from "@mui/material";
import Panel from "./panel";
import ComponentTabs from "./componentTabs";

export default function PanelOne(products) {
    console.log("PanelOne>>>>>>PRODUCTS", products);
    return (
        <Panel>
            <Grid>
                <h1>Panel 1</h1>
                <ComponentTabs products={products} />
            </Grid>
        </Panel>
    )
}