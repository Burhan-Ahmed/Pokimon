import React from "react";

export default function Login() {
    return (
        <div className="mx-auto m-52 p-28 w-1/2 flex justify-center shadow-xl bg-slate-400">
            <div>
            https://giphy.com/gifs/ash-ketchum-pokemon-pikachu-7ISIRaCMrgFfa            </div>
            <div className="p-28">
                <h1 className="text-center font-semibold text-4xl">
                    Pokédex
                </h1>
                <p>
                    Wellcome to Pokédex
                </p>
                <form className="flex flex-col" action="GET">
                    <input className="py-2 ps-5 rounded focus:outline-none" placeholder="Enter Email" type="email" name="" id="" />
                    <input className="py-2 ps-5 rounded focus:outline-none" placeholder="Enter your Password" type="text" name="" id="" />
                    <button className="py-1 px-3 border border-black rounded">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}