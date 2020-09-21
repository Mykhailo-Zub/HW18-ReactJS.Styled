import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

import style from "./SignIn.module.css";

import StyledLogo from "../../components/StyledLogo";
import StyledLabel from "../../components/StyledLabel";
import StyledTitle from "../../components/StyledTitle";
import StyledInput from "../../components/StyledInput";
import StyledLink from "../../components/StyledLink";
import StyledCopyright from "../../components/StyledCopyright";

const SignIn = () => {
    const [isRemember, setIsRemember] = useState(false);
    const [email, setEmail] = useState("");
    const [defaultEmail, setDefaultEmail] = useState("");
    const [password, setPassword] = useState("");
    const [defaultPassword, setDefaultPassword] = useState("");
    const [validationEmail, setValidationEmail] = useState("default");
    const [validationPassword, setValidationPassword] = useState("default");

    const savedUsers = [];
    const localCurrentUSer = JSON.parse(localStorage.getItem("isRemember"));
    const emailRegexp = /\S{2,}@{1}\S{2,}.\S{2,}/i;
    const passwordRegexp = /(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/;

    const getUsers = () => {
        const currentId = localStorage.getItem("currentId");
        for (let i = 0; i <= currentId; i++) {
            let user = localStorage.getItem(i);
            savedUsers.push(JSON.parse(user));
        }
    };

    useEffect(() => {
        if (localCurrentUSer) {
            console.log(localCurrentUSer);
            setDefaultEmail(localCurrentUSer.email);
            setDefaultPassword(localCurrentUSer.password);
        }
    }, [localCurrentUSer]);

    useEffect(() => {
        setEmail(defaultEmail);
    }, [defaultEmail]);

    useEffect(() => {
        setPassword(defaultPassword);
    }, [defaultPassword]);

    useEffect(() => {
        if (email.match(emailRegexp)) {
            setValidationEmail("valid");
        } else if (email === "") {
            setValidationEmail("default");
        } else setValidationEmail("invalid");
    }, [email]);

    useEffect(() => {
        if (password.match(passwordRegexp)) {
            setValidationPassword("valid");
        } else if (password === "") {
            setValidationPassword("default");
        } else setValidationPassword("invalid");
    }, [password]);

    const checkUser = () => {
        localStorage.removeItem("isRemember");
        getUsers();
        if (savedUsers.some((el) => el.email === email)) {
            savedUsers.forEach((el) => {
                if (el.email === email) {
                    if (el.password === password) {
                        const currentUser = {
                            firstName: el.firstName,
                            lastName: el.lastName,
                            email: el.email,
                            password: el.password,
                        };
                        const localCurrentUser = JSON.stringify(currentUser);

                        localStorage.setItem("token", el.firstName);
                        window.location.assign(
                            "https://mykhailo-zub.github.io/HW18-ReactJS.Styled/#/main"
                        );

                        if (isRemember) {
                            localStorage.setItem(
                                "isRemember",
                                localCurrentUser
                            );
                        }
                    } else alert("Wrong password");
                } else;
            });
        } else alert("User not find!");
    };

    return (
        <div className={style.wrapper}>
            <div className={style.logo}>
                <StyledLogo />
                <StyledTitle>Sign in</StyledTitle>
            </div>
            <StyledInput
                placeholder={"Email Address *"}
                validation={validationEmail}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <StyledInput
                placeholder={"Password *"}
                type="password"
                validation={validationPassword}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <StyledLabel htmlFor="rememberMe">
                <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    onChange={(e) => setIsRemember(e.target.checked)}
                />
                Remember me
            </StyledLabel>
            <Button
                variant="contained"
                color="primary"
                className={style.sign_in_btn}
                onClick={checkUser}
            >
                SIGN IN
            </Button>
            <div className={style.link_row}>
                <StyledLink href="https://mykhailo-zub.github.io/HW18-ReactJS.Styled/#/forgot">
                    Forgot password?
                </StyledLink>
                <StyledLink href="https://mykhailo-zub.github.io/HW18-ReactJS.Styled/#/signup">
                    Dont have an account? Sign Up
                </StyledLink>
            </div>
            <StyledCopyright>
                Copyright &copy; Your Website 2020
            </StyledCopyright>
        </div>
    );
};

export default SignIn;
