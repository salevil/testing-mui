import Button from "@mui/material/Button";
import useClickCount from "../hooks/useClickCount";

export default function MyButton({count, setCount}) {

    return (
        <Button variant="contained" onClick={() => setCount(count + 1)}>
            Clicked {count} times this button but  times all buttons!
        </Button>
    );
}