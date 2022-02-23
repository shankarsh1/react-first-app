import React, { useEffect, useState } from "react";
function getLocalStorageItem(key, value) {
    const savedLocalItems = JSON.parse(localStorage.getItem(key))
    if (savedLocalItems) return savedLocalItems
    return value
}
const useLocalStorage = (key, value) => {
    const [updatedValue, setUpdatedValue] = useState(() => {
        return getLocalStorageItem(key, value)
    });
    console.log(getLocalStorageItem(key, value));
    useEffect(() => {
        if (updatedValue !== '')
            localStorage.setItem(key, JSON.stringify(updatedValue))
    }, [updatedValue])
    return [updatedValue, setUpdatedValue]
};

export default useLocalStorage;
