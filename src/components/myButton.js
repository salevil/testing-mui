import React from "react";
import Button from "@mui/material/Button";
import useClickCount from "../hooks/useClickCount";

export default function MyButton({globalCount, setGlobalCount}) {

    const [localCount, setLocalCount] = useClickCount(0);

    const handleClick = () => {
        setLocalCount(localCount + 1);
        setGlobalCount(globalCount + 1);
    };

    return (
        <Button variant="contained" onClick={handleClick}>
            Click here ({localCount}, {globalCount})
        </Button>
    );
}