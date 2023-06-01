import { Grid } from "@mui/material";
import Panel from "../panel";
import Typography from "@mui/material/Typography";

export default function GroceryList(groceryList, setGroceryList) {
    return (
        <Panel>
            <Grid>
                <h1>Grocery List</h1>
                <Typography>Your cart is currently empty.</Typography>
                {/* <Typography>{groceryList}</Typography> */}
            </Grid>
        </Panel>
    )
}