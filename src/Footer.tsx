import { AppBar, Typography, Link, Box } from "@mui/material";
export default function BeerStore() {
    return (
        <Box
            sx={{
                marginTop: 2,
                p: 4,
                width: 'max'

            }}
            component="footer"
        >
            <Typography textAlign={"center"} sx={{ color: "white" }}>
                <Link
                    sx={{ color: "white" }}
                    href="https://www.concordium.com"
                    target={"_blank"}
                    rel="noreferer">
                    Read more!
                </Link>
            </Typography>

        </Box >
    )
}