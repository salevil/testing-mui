import { Grid } from "@mui/material";
import Panel from "../panel";
import ComponentTabs from "./componentTabs";


export default function GroceryListMaker({
    groceries, 
    setGroceries,
    onGroceriesSubmit,
    categories,
    setCategories,
    onCategorySubmit,
    stores,
    setStores,
    onStoreSubmit,
    aisles,
    setAisles,
    onAisleSubmit,
    groceryList,
    setGroceryList
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
                    stores={stores}
                    setStores={setStores}
                    onStoreSubmit={onStoreSubmit}
                    aisles={aisles}
                    setAisles={setAisles}
                    onAisleSubmit={onAisleSubmit}
                />
            </Grid>
        </Panel>
    )
}