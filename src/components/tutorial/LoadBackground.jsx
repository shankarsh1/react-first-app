import React from "react";
import '../../assets/css/AppStyle.css';
import style from '../../assets/css/custom.module.css';
function LoadBackground() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [count, setCount] = React.useState(0);
    const [counter, setCounter] = React.useState(0);
    React.useEffect(() => {
        const url = "https://randomuser.me/api/1.3/?results=5000";
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json["results"]))
            .catch((error) => console.log(error));
    }, []);

    React.useEffect(() => {
        if (data.length !== 0) {
            setIsLoading(false);
        }
    }, [data]);

    return (
        <React.Fragment>
            <div className="row col-md-12">
                <p className={style.success}>counter: {counter}</p>
                <button className="btn btn-info" onClick={() => setCounter(count + 1)}>
                    counter update
                </button>

                <p className="hello">count: {count}</p>
                <button className="btn btn-info" onClick={() => setCount(count + 1)}>
                    count update
                </button>
            </div>
            <div className="row col-md-12">
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    data.map((user, key) => (
                        <h1 key={key}>
                            {user.name.first} {user.name.last}
                        </h1>
                    ))
                )}
            </div>
        </React.Fragment>
    );
}

export default LoadBackground;
