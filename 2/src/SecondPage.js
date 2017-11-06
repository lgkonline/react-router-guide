import React from "react";
import { Link } from "react-router-dom";

class SecondPage extends React.Component {
    render() {
        return (
            <div>
                <h1>This is the second page</h1>

                <Link to="/">Go back home</Link>

                <h2>You can change the route programmatically like this:</h2>

                <button
                    type="button"
                    onClick={() => window.routeHistory.push("/")}
                >
                    Go home programmatically
                </button>
            </div>
        );
    }
}

export default SecondPage;