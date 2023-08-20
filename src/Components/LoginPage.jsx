import React from "react";

export default function Login() {
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
                <form className="flex flex-col space-y-2" action="GET">
                    <input className="py-2 ps-5 rounded focus:outline-none" placeholder="Enter Email" type="email" name="" id="" />
                    <input className="py-2 ps-5 rounded focus:outline-none" placeholder="Enter your Password" type="text" name="" id="" />
                    <button className="py-1 px-3 hover:text-white hover:bg-black ease-in-out border border-black rounded">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}