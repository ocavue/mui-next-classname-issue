import { createStyles, makeStyles, Theme } from "@material-ui/core"
import React from "react"

import { AuthContainer } from "src/extra/auth"
import { WorksapceStateContainer } from "src/extra/work"

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        root: {
            height: "100vh",
            width: "100vw",
        },
    })
})

function WorkspaceConsumer() {
    const classes = useStyles()
    const { user } = AuthContainer.useContainer()
    const { connected, loadingData } = WorksapceStateContainer.useContainer()

    return (
        <div className={classes.root} data-testid="workspace">
            This is src/views/Workspace.tsx {user} {connected} {loadingData}
        </div>
    )
}

export default function Workspace() {
    return (
        <WorksapceStateContainer.Provider>
            <AuthContainer.Provider>
                <WorkspaceConsumer />
            </AuthContainer.Provider>
        </WorksapceStateContainer.Provider>
    )
}
