import React from "react";
import Button from "@mui/material/Button";
import useClickCount from "../hooks/useClickCount";

export default function MyButton({globalCount, setGlobalCount}) {

    const [localCount, setLocalCount] = useClickCount(0);

    const handleClick = () => {
        setLocalCount(localCount + 1);
        setGlobalCount(globalCount + 1);
    };

    let localCountMessage;
    if (localCount === 0) {
    localCountMessage = "You haven't clicked this button yet, ";
    } else if (localCount === 1) {
    localCountMessage = "You clicked this button once, ";
    } else if (localCount === 2) {
    localCountMessage = "You clicked this button twice, ";
    } else {
    localCountMessage = `You clicked this button ${localCount} times, `;
    }

    let globalCountMessage;
    if (globalCount === 0) {
    globalCountMessage = "nor have you clicked any other button yet, ";
    } else if (globalCount === 1) {
    globalCountMessage = "and you clicked any button once!";
    } else if (globalCount === 2) {
        globalCountMessage = "and you clicked any button twice!";
    } else {
    globalCountMessage = `and you clicked any button ${globalCount} times!`;
    }

    return (
        <Button variant="contained" onClick={handleClick}>
            {localCountMessage}
            {globalCountMessage}
        </Button>

    // return (
    //     <Button variant="contained" onClick={handleClick}>
    //         {localCount===0 && (`You haven't clicked this button yet, `)}
    //         {localCount===1 && (`You clicked this button once, `)}
    //         {localCount===2 && (`You clicked this button twice, `)}
    //         {localCount > 2 && (`You clicked this button ${localCount} times, `)}
    //         {globalCount===0 && (`nor have you clicked any other button yet, `)}
    //         {globalCount===1 && (`and you clicked any button once!`)}
    //         {globalCount===2 && (`and you clicked any button twice!`)}
    //         {globalCount >2 && (`and you clicked any button ${globalCount} times!`)}
    //     </Button>
    );
}