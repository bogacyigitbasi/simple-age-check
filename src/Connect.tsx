import {
    detectConcordiumProvider,
    WalletApi,
} from "@concordium/browser-wallet-api-helpers";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useState } from "react";

import {
    AccountAddress,
    IdStatementBuilder
} from '@concordium/web-sdk';

export default function Connect(props: {
    onConnected: (provider: WalletApi, account: string) => void;
    onDisconnected: () => void;
}) {
    const [isConnected, setConnected] = useState(false);

    function connect() {
        detectConcordiumProvider()
            .then((provider) => {
                provider
                    .connect()
                    .then((account) => {
                        setConnected(true);
                        props.onConnected(provider, account!);
                    })
                    .catch((_) => {
                        alert("Please allow wallet connection");
                        setConnected(false);
                    });
                provider.removeAllListeners();
                provider.on("accountDisconnected", () => {
                    setConnected(false);
                    props.onDisconnected();
                });
                provider.on("accountChanged", (account) => {
                    props.onDisconnected();
                    props.onConnected(provider, account);
                    setConnected(true);
                });
                provider.on("chainChanged", () => {
                    props.onDisconnected();
                    setConnected(false);
                });
                return provider
            })
            .catch((_) => {
                console.error(`could not find provider`);
                alert("Please download Concordium Wallet");
            });

    }

    async function age_check() {
        const provider = await detectConcordiumProvider();
        const account = await provider.connect() as string;
        if (!account) {
            alert("Please connect");
        }
        const statementBuilder = new IdStatementBuilder().addMinimumAge(18);
        const statement = statementBuilder.getStatement();
        const challenge = "AAAAAAAA"

        // Requesting ID proff to check if user is 18 years old
        provider.requestIdProof(account, statement, challenge)
            .then((proof) => {
                // User is 18 year old, sshow something
                <div>
                    lalalala
                </div>
            })
            .catch(() => {
                // User is not 18 years old
                alert("You are not 18 years old!")
            })
    }

    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Amazing Beer Store!
                </Typography>
                <Button color="inherit" onClick={connect} disabled={isConnected}>
                    {isConnected ? "Connected" : "Connect"}
                </Button>

                <Button color="inherit" onClick={age_check} disabled={!isConnected}>
                    Buy some beers!
                </Button>

            </Toolbar>
        </AppBar >
    );
}