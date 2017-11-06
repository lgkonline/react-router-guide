import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>

                <Link to="/second">Go to the second page</Link>
            </div>
        );
    }
}

export default HomePage;