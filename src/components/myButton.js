import React, {useState}from "react";
import Button from "@mui/material/Button";

export default function MyButton({globalCount, setGlobalCount}) {

    const [localCount, setLocalCount] = useState(0)

    const handleClick = () => {
        setGlobalCount(globalCount + 1);
        setLocalCount(localCount + 1);
      };

    return (
        <Button variant="contained" color="secondary" onClick={handleClick}>
            Local Clicks: {localCount} | Global Clicks: {globalCount}
        </Button>
    );
}