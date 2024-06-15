import React from "react";
import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";


function ErrorPage() {
    const error = useRouteError();

    return(
        <div>
        <header>
            <div className="navbar">
            <NavBar />
            </div>
        </header>
        <main>
            <h1>
                Oops! Looks like something went wrong.
            </h1>
        </main>
        </div>
    )
}

export default ErrorPage;
