import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

export default function Github() {

    // const [data, setData] = useState([ ]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/rajib010')
    //         .then((response) => response.json())
    //         .then((data) => setData(data))
    // }, [])
    const data = useLoaderData();// used to get the data from the loader...
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl align-center">
            GitHub Followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}


//using loader we can optimize the speed by loading the data before the page is rendered 
// and the data is stored in cache...

export async function getLoaderData() {
    const response = await fetch('https://api.github.com/users/rajib010');
    return response.json()
}