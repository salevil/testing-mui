import React from "react";
import Button from "@mui/material/Button";
import useClickCount from "../hooks/useClickCount";

export default function MyButton({count, setCount}) {

    const [localCount, setLocalCount] = useClickCount(0);

    return (
        <Button variant="contained" onClick={() => setCount(count + 1)} onLocalClick={() => setLocalCount(localCount + 1)}>
            You clicked this button {localCount} times, but {count} times all buttons!
        </Button>
    );
}