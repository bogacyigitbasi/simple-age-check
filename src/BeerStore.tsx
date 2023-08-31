import {
    detectConcordiumProvider,
    WalletApi,
} from "@concordium/browser-wallet-api-helpers";
import { Toolbar, Grid, Dialog, DialogTitle, DialogActions, Stack, Alert, Button } from "@mui/material";
import { useState } from "react";

import beers from './image/beers.png';

import {
    AccountAddress,
    IdStatementBuilder
} from '@concordium/web-sdk';

export default function BeerStore() {

    const [isVerified, setVerified] = useState(false);
    const [isFailed, setFailed] = useState(false);

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
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
                setFailed(false)
            })
            .catch(() => {
                setFailed(true)
                setOpen(true)
                // User is not 18 years old
                // alert("Age verification was not completed. Please complete the verification")
            })
    }

    return (
        <Toolbar>
            <Stack>
                <Grid sx={{ mt: 0, ml: 20 }}>
                    {
                        !isVerified ?
                            <h2>Click the button below to verify your age!</h2>
                            :
                            ""
                    }

                </Grid>
                <Grid sx={{ mt: 0, ml: 40 }}>

                    <Button color="inherit" onClick={age_check} variant="contained" disabled={isVerified} style={{ alignSelf: 'auto', display: isVerified ? "none" : "block" }}>
                        Buy some beers!
                    </Button>
                </Grid >
                <Grid>
                    {
                        isVerified ?
                            <Grid sx={{ mt: -20, ml: -30 }}>
                                <img src={beers}></img>
                            </Grid>

                            : ""
                    }
                    {
                        isFailed ?
                            <Dialog open={open}
                                onClose={handleClose}>
                                <DialogTitle>Age Verification Failed</DialogTitle>
                                <Alert severity="warning" sx={{ ml: "50" }}>
                                    Age verification is not complete. You are not allowed to access beer store!
                                </Alert>
                                <DialogActions>
                                    <Button onClick={handleClose}>
                                        Cancel
                                    </Button>
                                </DialogActions>
                            </Dialog>
                            : ""
                    }
                </Grid>
            </Stack>
        </Toolbar >
    );

}