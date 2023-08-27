import React, { useState } from "react";
import axios from "axios"; // Import Axios


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        axios.post("http://localhost:8000", { email, password })
            .then((response) => {
                console.log("DATA SEND");
                setState(response.data);
                if (response.data === "Login successful") {
                    window.location.href = '/homeApp';
                }
            })
            .catch(() => {
                setEmail("");
                setPassword("");
                console.log("DATA NOT SEND");
            })

        setTimeout(() => { setState("") }, 8000);
    }

    return (
        <div className="mx-auto my-64 w-6/12 h-5/6 rounded-lg flex justify-center shadow-2xl bg-slate-300">

            <div >
                <img className="rounded-s-lg" src="src\assets\ezgif.com-resize.gif" alt="Animated GIF" />
            </div>
            <div className="px-28 p-24 text-center">
                <h1 className="mb-5 font-semibold text-5xl">
                    Pokédex
                </h1>
                <p className="mb-12 font-mono text-md">
                    Welcome to Pokédex
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-2" action="#" method="get">
                    <input value={email} className="py-2 ps-3 rounded focus:outline-none" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" type="text" required />
                    <input value={password} className="py-2 ps-3 rounded focus:outline-none" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" type="password" required />
                    <button type="submit" className="py-1 px-3 hover:text-white hover:bg-black ease-in-out border border-black rounded">
                        Login
                    </button>
                </form>
                <div className="text-start animate-fade font-semibold text-green-600">
                    {state}
                </div>
            </div>
        </div>
    );
}