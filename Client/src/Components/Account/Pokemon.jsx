import PokiCard from "./Cards";
import axios from "axios";
import '../Account/profile.css'
import { useEffect, useState } from "react";
import Navigation from '../NavBar/Nav.jsx'

export function UpperCaseFirstLetter(letter) {
    return (letter[0].toUpperCase() + letter.slice(1));
}

export default function Pokemon() {
    const [primary, setprimary] = useState([]);
    const [secondary, setsecondary] = useState([]);
    const [img, setimg] = useState("");
    const [pokName, setpokName] = useState("");
    const [stat, setstat] = useState("");

    const pokinfo = async () => {
        const api = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setprimary(api.data.results);
        const api2 = await axios.get("https://pokeapi.co/api/v2/type");
        setsecondary(api2.data.results)
    }
    const handleClick = async (item, index) => {
        const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`
        const stat = `https://pokeapi.co/api/v2/pokemon/${index}`
        const statResponse = await axios.get(stat);
        setpokName(item);
        setimg(imgUrl);
        setstat(statResponse.data);
    };

    useEffect(() => {
        pokinfo();
    }, [])

    return (
        <>
            <Navigation />
            <div className="mx-64 flex border border-black">

                <div className="flex py-7 px-24 border border-black">
                    <PokiCard onCardClick={handleClick} second={secondary} Prime={primary} />
                </div>
                <div className="my-auto mx-auto text-center">
                    <img className="h-96 mx-auto" src={img} alt="Pokemon Image" />
                    <p className="text-5xl">
                        {pokName}
                    </p>
                    <pre>
                        Base Experience {stat.base_experience}
                        <br />
                        Weight {stat.weight}
                        <br />
                        Height {stat.height}
                    </pre>
                    <div className="border border-black">
                        <button>PREVIOUS</button>
                        <button> NEXT</button>
                    </div>
                </div>

            </div>
        </>
    );
}
