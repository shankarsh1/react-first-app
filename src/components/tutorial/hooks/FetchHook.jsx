import React, { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";

const FetchHook = () => {
    const [screen, setScreen] = useState({ isLoadingFpg: true, dataFpg: [], errors: [], errorMessage: '' })
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ api_token: '6hrFDATxrG9w14QY9!VhLE0Wg6LIvwOwJfRp4rs8Mzozk5xhSkw0_MQ' })
    };

    useEffect(() => {
        //https://reqres.in/api/posts
        fetch('https://fpgindia.in/api/Fpg/v1/fpg', requestOptions)
            .then(response => response.json())
            .then(res => {
                setScreen({ dataFpg: res.data, isLoadingFpg: false })
            });
    }, [])
    if (screen.errorMessage) {
        return <div>Error: </div>;
    } else if (screen.isLoadingFpg) {
        return <div>Loading...</div>;
    } else {
        console.log(screen.dataFpg.content.section5th, screen.dataFpg.content.section5th.title)
        return (
            <>
                <h1>{screen.dataFpg.content.section5th.title}</h1>
                <h2>{screen.dataFpg.content.section5th.description}</h2>
                <ul>
                    {screen.dataFpg.content.section5th.description_list.map((item,inKey) => (
                        <li key={inKey}>
                            {inKey} {item.detail}
                        </li>
                    ))}
                </ul>
            </>
        );
    }


    /* const { isLoadingFpg, dataFpg, errorFpg } = useFetch("https://fpgindia.in/api/Fpg/v1/fpg", requestOptions);
    console.info(isLoadingFpg, dataFpg, errorFpg) */
    /* const { isLoading, data, error } = useFetch("https://jsonplaceholder.typicode.com/users");
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (isLoading) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {data && data.map(item => (
                    <li key={item.id}>
                        {item.id} {item.name}
                    </li>
                ))}
            </ul>
        );
    } */
};

export default FetchHook;