import React from "react";
import { Router, Route, Link } from "react-router-dom";
import createHistory from "history/createHashHistory";

window.routeHistory = createHistory();

class App extends React.Component {
    render() {
        return (
            <Router history={routeHistory}>
                <div>
                    <h1>Hello World</h1>
                </div>
            </Router>
        );
    }
}

export default App;