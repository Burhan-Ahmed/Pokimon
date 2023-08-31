import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import axios from "axios"; // Import Axios

export default function ProfileInfo() {
    const [info, setInfo] = useState("");

    async function getInfo() {
        await axios.get("http://localhost:8000")
            .then(response => {
                setInfo(response.data)
            })
            .catch(() => {
                console.log("Error Fetching Data");
            })
    }

    useEffect(() => {
        getInfo()
    }, [])
    return (
        <div className="my-48 text-center h-screen border border-black">
            <div className="py-28">
                <FontAwesomeIcon icon={faUser} size="3x" />
            </div>
            <div className=" text-4xl font-semibold">
                Name {info}
            </div>
            <div className=" ">
                email 
            </div>
            <div className=" ">
                gender
            </div>
        </div>
    )
}

