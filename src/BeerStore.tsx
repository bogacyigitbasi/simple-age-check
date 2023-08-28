import {
    detectConcordiumProvider,
    WalletApi,
} from "@concordium/browser-wallet-api-helpers";
import { AppBar, Toolbar, Card, CardMedia, Typography, Button } from "@mui/material";
import { useState } from "react";


import beers from './image/beers.png';

import {
    AccountAddress,
    IdStatementBuilder
} from '@concordium/web-sdk';

export default function BeerStore() {

    const [isVerified, setVerified] = useState(false);

    async function age_check() {
        const provider = await detectConcordiumProvider();
        const account = await provider.connect() as string;
        if (!account) {
            alert("Please connect");
        }
        const statementBuilder = new IdStatementBuilder().addMinimumAge(18);
        const statement = statementBuilder.getStatement();
        const challenge = "BBBBBBBB"

        // Requesting ID proof to check if user is 18 years old
        provider.requestIdProof(account, statement, challenge)
            .then((proof) => {
                // User is 18 year old, show something
                setVerified(true)
            })
            .catch(() => {
                // User is not 18 years old
                alert("Age verification was not completed. Please complete the verification")
            })
    }

    return (
        <Toolbar>
            <Card>
                <Button color="inherit" onClick={age_check} disabled={isVerified}>
                    Buy some beers!
                </Button>

            </Card >
            {
                isVerified ? <img src={beers}></img>
                    : ""
            }
        </Toolbar >
    );

}