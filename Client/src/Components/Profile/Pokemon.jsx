import React from "react";
import './profile.css'
<<<<<<< HEAD

export default function Pokemon() {
    return (
        <div className="contain mx-auto border border-black">
            <div className=" p-5 border border-black">
                LIST
            </div>
            <div className="p-5 border border-black">
                Pokemon
            </div>
        </div>
=======
import PokiCard from "./Cards";
import { Container } from "@mui/material";

export default function Pokemon() {
    return (
        <>
            <Container>
                <div className="mx-auto flex border border-black">

                    <div>
                        <div className="flex p-5 border border-black">
                            <PokiCard />
                            <PokiCard />
                        </div>
                        <div className="flex p-5 border border-black">
                            <PokiCard />
                            <PokiCard />
                        </div>
                        <div className="flex p-5 border border-black">
                            <PokiCard />
                            <PokiCard />
                        </div>
                        <div className="flex p-5 border border-black">
                            <PokiCard />
                            <PokiCard />
                        </div>
                    </div>
                    <div>
                        SHOW
                    </div>
                </div>
            </Container>
        </>
>>>>>>> 375aaaa70b8af6f3e951eeb78958956074382993
    );
}
