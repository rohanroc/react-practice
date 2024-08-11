import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/rohanroc').then(function (responce) {
            return responce.json();
        }).then(function (data) {
            console.log(data)
            setData(data);
        }).catch(function (error) {
            console.log(error);
        })
    }, [])
    return (
        <div className='bg-gray-400 text-3xl text-center py-2.5'>
            GitHub followers: {data.followers}
            <img src={data.avatar_url} alt="" className='w-1/4 rounded-full m-auto my-5' />
            <p>Name: {data.name}</p>
        </div>
    )
}

export default Github
