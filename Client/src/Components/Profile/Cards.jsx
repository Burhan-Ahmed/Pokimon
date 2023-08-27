import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function PokiCard() {
    return (
        <div className="contain mx-auto border border-black">
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Live From Space
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Mac Miller
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 160 }}
                    image="src/assets/syto.jpg"
                    alt="Live from space album cover"
                />
            </Card>
        </div>
    );
}
