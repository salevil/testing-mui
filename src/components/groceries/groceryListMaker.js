import { Grid } from "@mui/material";
import Panel from "../panel";
import ComponentTabs from "./componentTabs";

export default function GroceryListMaker({
    groceries, 
    setGroceries,
    categories,
    setCategories,
    onGroceriesSubmit,
    onCategorySubmit
    }) {
    return (
        <Panel>
            <Grid>
                <h1>Prepare your Grocery List</h1>
                <ComponentTabs
                    groceries={groceries}
                    setGroceries={setGroceries}
                    categories={categories}
                    setCategories={setCategories}
                    onGroceriesSubmit={onGroceriesSubmit}
                    onCategorySubmit={onCategorySubmit}
                />
            </Grid>
        </Panel>
    )
}