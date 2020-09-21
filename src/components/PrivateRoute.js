import React from "react";
import { Redirect, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";

const PrivateRoute = (props) => {
    const signOut = () => {
        localStorage.removeItem("token");
        window.location.assign(
            "https://mykhailo-zub.github.io/HW18-ReactJS.Styled/#/signin"
        );
    };

    const token = localStorage.getItem("token");
    if (token) {
        return (
            <>
                <Route {...props}>
                    <h3>Hello, {token}!</h3>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={signOut}
                    >
                        SIGN OUT
                    </Button>
                </Route>
            </>
        );
    }
    return <Redirect to="/signin" />;
};

export default PrivateRoute;
