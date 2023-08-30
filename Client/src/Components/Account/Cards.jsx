import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import '../Account/profile.css'
import { UpperCaseFirstLetter } from "./Pokemon";

export default function PokiCard({ PokiData, onCardClick, tagline }) {

    return (
        <div className="Grid">
            {PokiData.map(item => {
                return (
                    <div className="shadow-lg" onClick={() => onCardClick(item)}>
                        <Card key={item.url} className="border rounded-lg">
                            <CardContent>
                                <Typography component="div" variant="h5">
                                    {UpperCaseFirstLetter(item.name)}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {item.name}
                                    {item.name}
                                    {console.log(tagline.map(cc =>
                                        `https://pokeapi.co/api/v2/pokemon-species/${cc.name}`
                                    ))}
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                sx={{ width: 170 }}
                                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/').slice(-2, -1)}.png`}
                                alt="Pokemon Picture"
                            />
                        </Card>
                    </div>
                )
            }
            )}
        </div>
    );
}