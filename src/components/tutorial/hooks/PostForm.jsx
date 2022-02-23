import React, { useRef } from "react";
import useFetch from "react-fetch-hook";
export const PostForm = () => {
    const { isLoading, items, error } = useFetch("https://jsonplaceholder.typicode.com/comments");
    console.log(isLoading, items, error);
    if (error) {
        return <div>Error: {error.message}</div>;
    } if (isLoading) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <h3>Hooks Fetch</h3><ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.name} {item.id}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}
