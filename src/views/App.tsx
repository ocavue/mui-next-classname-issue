import { CssBaseline } from "@material-ui/core"
import { createMuiTheme } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"
import React from "react"

import { ThemeContainer } from "src/extra/theme"
import { WorksapceStateContainer } from "src/extra/work"

const lightTheme = createMuiTheme({ palette: { type: "light" } })

const ThemeConsumer: React.FC = (props) => {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    )
}

const App: React.FC = (props) => {
    return (
        <ThemeContainer.Provider>
            <WorksapceStateContainer.Provider>
                <ThemeConsumer>{props.children}</ThemeConsumer>
            </WorksapceStateContainer.Provider>
        </ThemeContainer.Provider>
    )
}

export default App
