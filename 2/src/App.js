import React from "react";
import { Router, Route, Link } from "react-router-dom";
import createHistory from "history/createHashHistory";

import HomePage from "./HomePage";
import SecondPage from "./SecondPage";

window.routeHistory = createHistory();

class App extends React.Component {
    render() {
        return (
            <Router history={routeHistory}>
                <div>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/second" component={SecondPage} />
                </div>
            </Router>
        );
    }
}

export default App;