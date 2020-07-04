import { Container, createStyles, makeStyles, Theme, Typography } from "@material-ui/core"
import React from "react"

import { AuthContainer } from "src/extra/auth"

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        title: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(2),
        },
        submit: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(3),
        },
        form: {
            width: "100%", // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
    })
})

export default function SignIn() {
    const classes = useStyles()

    return (
        <AuthContainer.Provider>
            <Container component="main" maxWidth="xs" data-testid="auth_container">
                <Typography component="h1" variant="h5" className={classes.title}>
                    aaaaaaaaa
                </Typography>
            </Container>
        </AuthContainer.Provider>
    )
}
