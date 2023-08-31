import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import '/src/indexStyles.css'
import { UpperCaseFirstLetter } from "./Pokemon";

export default function PokiCard({ Prime, onCardClick, second }) {
    const typeResults = second.map(type => UpperCaseFirstLetter(type.name));
    return (
        <div className="Grid">
            {Prime.map((item) => {
                const index = item.url.split("/")[6]
                return (
                    <div className="card" onClick={() => onCardClick(UpperCaseFirstLetter(item.name), index)}>
                        <Card key={item.url} className="h-52 border rounded-lg">
                            <CardMedia
                                className='mx-auto pt-1'
                                component="img"
                                sx={{ width: 75 }}
                                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`}
                                alt="Pokemon Picture"
                            />
                            <CardContent>
                                <Typography component="div" variant="h5">
                                    {UpperCaseFirstLetter(item.name)}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Type: {typeResults[index]}

                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                )
            }
            )}
        </div>
    );
}