import { AppBar, Typography, Link, Box } from "@mui/material";
export default function BeerStore() {
    return (
        <Box
            sx={{
                borderTop: "1px solid #000",
                marginTop: 2,
                marginLeft: -30,
                p: 4,
                width: 'max'

            }}
            component="footer"
        >
            <Typography textAlign={"center"} sx={{ color: "white" }}>
                <Link
                    sx={{ color: "black" }}
                    href="https://www.concordium.com"
                    target={"_blank"}
                    rel="noreferer">
                    Visit the Concordium to find out more!
                </Link>
            </Typography>

        </Box >
    )
}