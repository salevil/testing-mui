import Button from "@mui/material/Button";

export default function MyButton({count, onClick}) {

    return (
        <Button variant="contained" onClick={onClick}>
            Clicked {count} times!
        </Button>
    );
}