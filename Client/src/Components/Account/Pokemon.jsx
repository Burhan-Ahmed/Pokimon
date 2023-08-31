import PokiCard from "./Cards";
import axios from "axios";
import '/src/indexStyles.css'
import { useEffect, useState } from "react";
import Navigation from '../NavBar/Nav.jsx'

export function UpperCaseFirstLetter(letter) {
    return (letter[0].toUpperCase() + letter.slice(1));
}

export default function Pokemon() {
    const [primary, setprimary] = useState([]);
    const [secondary, setsecondary] = useState([]);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [Previous, setPrevious] = useState("");
    const [Next, setnext] = useState();
    const [img, setimg] = useState("");
    const [pokName, setpokName] = useState("");
    const [stat, setstat] = useState("");

    const pokinfo = async () => {
        const api = await axios.get(url);
        setprimary(api.data.results);
        setnext(api.data.next);
        setPrevious(api.data.previous)
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
    }, [url])

    return (
        <>
            <Navigation />
            <div className="mx-auto w-fit  flex">
                <div className="flex py-7 px-24">
                    <PokiCard onCardClick={handleClick} second={secondary} Prime={primary} />
                </div>
                <div className="my-auto mx-auto text-center">
                    <img className="h-96 mx-auto" src={img} alt="Pokemon Image" />
                    <p className="text-6xl">
                        {pokName}
                    </p>
                    <pre className="text-lg">
                        Base Experience {stat.base_experience}
                        <br />
                        Weight {stat.weight}
                        <br />
                        Height {stat.height}
                    </pre>
                    <div className="mt-28">
                        <button onClick={() => { setUrl(Previous) }} className="py-1 px-4 me-2 rounded-full" type="button">
                            {Previous ? "Previous" : ""}
                        </button>
                        <button onClick={() => { setUrl(Next) }} type="button" className="py-1 px-4 ms-2 rounded-full border border-black">
                            Next
                        </button>
                    </div>
                </div>

            </div >
        </>
    );
}
