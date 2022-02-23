import React, { useDebugValue, useEffect } from "react";
const useLogger = (value) => {
    useDebugValue(value);
    useEffect(() => {
        console.info(value);
    }, [value])
};

export default useLogger;
