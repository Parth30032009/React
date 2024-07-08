import { useRouteError } from "react-router-dom";

function Error() {
    let error = useRouteError();
    
    return (
        <div>
            <h1>Error: {error.message}</h1>
            <p>Something went wrong, please try again later.</p>
            <p>If the problem persists, please contact support.</p>
            <p>Error Details: {error.error.message}</p>

            {/* // Show a back-to-home button */}
            <button onClick={() => window.history.back()}>Back to Home</button>



            {/* // Show a link to the GitHub repository */}
            <a href="https://github.com/example/namaste-react-app" target="_blank">View on GitHub</a>

            {/* // Show a link to the documentation */}
            <a href="https://example.com/documentation" target="_blank">Documentation</a>
        </div>
    )
}

export default Error ;