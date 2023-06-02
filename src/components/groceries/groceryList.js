import { Grid } from "@mui/material";
import Panel from "../panel";

export default function GroceryList(groceryList, setGroceryList, selectedItems, setSelectedItems) {
    
    console.log(">>>>>> GroceryList", selectedItems)
    return (
        <Panel>
            <Grid>
                <h1>Grocery List</h1>
                {/* {selectedItems.length === 0 && <Typography>Your cart is currently empty.</Typography>} */}
                
            </Grid>
        </Panel>
    )
}