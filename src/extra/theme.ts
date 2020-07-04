import { useState } from "react"
import { createContainer } from "unstated-next"

const useTheme = () => {
    const [theme, setTheme] = useState("")
    return {
        theme,
        setTheme,
    }
}

export const ThemeContainer = createContainer(useTheme)
