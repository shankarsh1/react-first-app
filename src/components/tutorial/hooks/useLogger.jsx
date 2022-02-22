import React, { useEffect } from "react";
const useLogger = (value) => {
    useEffect(() => {
        console.info(value);
    }, [value])
};

export default useLogger;
