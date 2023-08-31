import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import axios from "axios";
import Navigation from './NavBar/Nav.jsx'

export default function ProfileInfo() {
    const [info, setInfo] = useState("");

    async function getInfo() {
        await axios.get("http://localhost:8000/profile")
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
        <>
            <Navigation />
            <div className="px-10 py-20 my-48 w-max h-max mx-auto border border-slate-400 rounded-xl">
                <div className="pt-28 pb-16 text-center">
                    <FontAwesomeIcon icon={faUser} size="3x" />
                </div>
                <div className="pb-5 text-4xl font-semibold">
                    Name : {info.first_name}
                </div>
                <div className="py-2">
                    Email : {info.email}
                </div>
                <div>
                    Gender : {info.gender}
                </div>
            </div>
        </>
    )
}

