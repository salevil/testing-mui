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
            {localCount===0 && (`You haven't clicked this button yet, `)}
            {localCount===1 && (`You clicked this button once, `)}
            {localCount===2 && (`You clicked this button twice, `)}
            {localCount > 2 && (`You clicked this button ${localCount} times, `)}
            {globalCount===0 && (`nor have you clicked any other button yet, `)}
            {globalCount===1 && (`and you clicked any button once!`)}
            {globalCount===2 && (`and you clicked any button twice!`)}
            {globalCount >2 && (`and you clicked any button ${globalCount} times!`)}
        </Button>
    );
}