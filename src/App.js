import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

import "./App.css";
import PrivateRoute from "./components/PrivateRoute";

import SignIn from "./modules/SignIn/SignIn";
import SignUp from "./modules/SignUp/SignUp";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/signin">
                        <SignIn />
                    </Route>
                    <Route exact path="/signup">
                        <SignUp />
                    </Route>
                    <Route exact path="/forgot">
                        <h3>
                            If you forgot your password, please write it next
                            time. Now you must sign up one more time.
                        </h3>
                        <Link to="/signup">Sign up</Link>
                    </Route>
                    <PrivateRoute exact path="/main" />

                    <Route
                        path="/"
                        exact
                        render={() => <Redirect to="/main" />}
                    ></Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
