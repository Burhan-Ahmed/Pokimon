import React from "react";
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function PokiCard({ PokiData }) {
    return (
        <div className="border border-black">
            {PokiData.map(item => {
                return (
                    <Card className="flex" key={item.url} sx={{ display: 'flex' }}>
                        <CardContent>
                            <Typography component="div" variant="h5">
                                {item.name}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Type
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            sx={{ width: 160 }}
                            image="src\assets\syto.jpg"
                            alt="Pokemon Picture"
                        />
                    </Card>
                )
            }
            )}
        </div>
    );
}
