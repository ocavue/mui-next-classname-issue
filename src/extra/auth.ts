import { useMemo, useState } from "react"
import { createContainer } from "unstated-next"

type User = {
    email: string
}

function useAuth() {
    const [user, setUser] = useState<User | null>(null)
    const email: string | null = useMemo(() => (user ? user.email : null), [user])
    const [loadingUser, setLoadingUser] = useState(true)

    return { user, setUser, email, loadingUser, setLoadingUser }
}

export const AuthContainer = createContainer(useAuth)
