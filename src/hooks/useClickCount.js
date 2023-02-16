import React, { useState } from "react";

export default function useClickCount() {
    const [count, setCount] = useState(0);

    return [count, setCount];
}