import { AppBar, Toolbar, Card, CardMedia, Typography, Link, Box, Button } from "@mui/material";
import { useState } from "react";


export default function BeerStore() {
    return (
        <Box
            sx={{
                borderTop: "1px solid #000",
                marginTop: "auto",
                p: 4,
            }}
            component="footer"
        >
            <Typography textAlign={"center"} sx={{ color: "white" }}>
                <Link
                    sx={{ color: "black" }}
                    href="www.concordium.com"
                    target={"_blank"}
                    rel="noreferer">
                    Visit the Concordium to find out more!
                </Link>
            </Typography>

        </Box >
    )
}