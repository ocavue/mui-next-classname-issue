import { NextPage } from "next"
import dynamic, { Loader } from "next/dynamic"
import React from "react"
import { Loading } from "src/views/Loading"

export function DynamicPage<P>(displayName: string, dynamicOptions: Loader<P>) {
    const View = dynamic(dynamicOptions, { ssr: false, loading: Loading })
    const Page: NextPage<P> = (props: P) => {
        return <View {...props} />
    }
    Page.displayName = displayName
    return Page
}


export default DynamicPage("Index", () => {
    if (localStorage?.getItem("__rino_dev_auth_state") === "yes") {
        return import("src/views/Workspace")
    } else {
        return import("src/views/Landing")
    }
})
