import { useState } from "react";

function Cloud() {
    const [city, setCity] = useState("");
    const [data, setData] = useState();
    const API_KEY = "4a3b2a6b449ad3945b31157d99052b70";

    async function fetchData() {
        const get = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const jsonData = await get.json();
        setData(jsonData);
        console.log(jsonData);
    }

    
    function getData(evt) {
        setCity(evt.target.value); 
        console.log(evt.target.value);
    }

    return (
        <>
            <div className="countainer">
                <div className="input-field">
                    <input
                        placeholder="Enter City"
                        onChange={getData}
                    />
                    <button onClick={fetchData}>Search</button>
                </div>
                <div className="show-Information">
                    {
                        data && data.weather?
                        <div className="data">
                            <h3> City : {data.name}</h3>
                            <h3> Tem : {data.main.temp}C</h3>
                            <h3> Weather : {data.weather[0].description}</h3>
                        </div>:
                        ""
                    }
                </div>
            </div>
        </>
    );
}

export default Cloud;