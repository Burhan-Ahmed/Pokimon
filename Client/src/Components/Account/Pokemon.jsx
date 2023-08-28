import PokiCard from "./Cards";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Pokemon() {
    const [pokidata, setpokidata] = useState([]);

    const pokinfo = async () => {
        const api = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setpokidata(api.data.results);
    }
    useEffect(() => {
        pokinfo();
    }, [])
    return (
        <div className="mx-64 flex border border-black">
            <div className="flex p-5 border border-black">
                <PokiCard PokiData={pokidata} />
                <PokiCard PokiData={pokidata} />
            </div>
            <div className=" text-center border border-black">
                <img src="src\assets\syto.jpg" alt="Pokemon Image" />
                <p className="text-5xl">
                    SHOW
                </p>
                <p className="">
                    HP
                </p>
                <p className="">
                    ABILITY
                </p>
            </div>
        </div>
    );
}
