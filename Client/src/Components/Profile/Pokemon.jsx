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
    );
}
