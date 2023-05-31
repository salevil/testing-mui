import { Grid } from "@mui/material";
import Panel from "../panel";
import ComponentTabs from "./componentTabs";

export default function GroceryListMaker({groceries, setGroceries, onGroceriesSubmit}) {
    return (
        <Panel>
            <Grid>
                <h1>Prepare your Grocery List</h1>
                <ComponentTabs groceries={groceries} setGroceries={setGroceries} onGroceriesSubmit={onGroceriesSubmit} />
            </Grid>
        </Panel>
    )
}