import PokiCard from "./Cards";
import axios from "axios";
import '../Account/profile.css'
import { useEffect, useState } from "react";
import Navigation from '../NavBar/Nav.jsx'

export function UpperCaseFirstLetter(letter) {
    return letter[0].toUpperCase() + letter.slice(1)
}

export default function Pokemon() {
    const [pokidata, setpokidata] = useState([]);
    const [tag, settag] = useState([]);
    const [Info, setInfo] = useState("");
    const [img, setimg] = useState("");

    const pokinfo = async () => {
        const api = await axios.get("https://pokeapi.co/api/v2/pokemon");
        const secondary = await axios.get("https://pokeapi.co/api/v2/pokemon-species/");
        setpokidata(api.data.results);
        settag(secondary.data.results);
    }

    const handleClick = (item) => {
        const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/').slice(-2, -1)}.png`
        setInfo(item);
        setimg(imgUrl);
    };

    useEffect(() => {
        pokinfo();
    }, [])

    return (
        <>
            <Navigation />
            <div className="mx-64 flex border border-black">

                <div className="flex p-5 border border-black">
                    <PokiCard onCardClick={handleClick} PokiData={pokidata} tagline={tag} />
                </div>
                <div className="my-auto mx-auto text-center">
                    <img className="mx-auto" src={img} alt="Pokemon Image" />
                    <p className="text-5xl">
                        {Info.name}
                    </p>
                    <p >
                        Ultimate {Info.name}
                    </p>
                    <p >
                        Weight {Info.name}
                    </p>
                    <p >
                        Height {Info.name}
                    </p>
                </div>
            </div>
        </>
    );
}
