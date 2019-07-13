import React from "react"
import { Route } from "react-router-dom";
import { Homepage } from "./components"
import { Session } from "./App"

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Homepage} />
            <Route path="/app" component={Session} />
        </div>
    )
}

export default Routes