import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

import style from "./SignUp.module.css";

import StyledLogo from "../../components/StyledLogo";
import StyledLabel from "../../components/StyledLabel";
import StyledTitle from "../../components/StyledTitle";
import StyledInput from "../../components/StyledInput";
import StyledLink from "../../components/StyledLink";
import StyledCopyright from "../../components/StyledCopyright";

let id = 0;

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newsletter, setNewsletter] = useState(false);
    const [validationEmail, setValidationEmail] = useState("default");
    const [validationPassword, setValidationPassword] = useState("default");
    const [validationFirstName, setValidationFirstName] = useState("default");
    const [validationLastName, setValidationLastName] = useState("default");

    const user = {
        firstName,
        lastName,
        email,
        password,
        newsletter,
    };

    const emailRegexp = /\S{2,}@{1}\S{2,}.\S{2,}/i;
    const passwordRegexp = /(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/;
    const nameRegexp = /[a-zA-Z]{3,}/i;

    const getId = () => {
        const currentId = localStorage.getItem("currentId");
        if (currentId) id = +currentId + 1;
    };

    const signUp = () => {
        if (firstName && lastName && email && password) {
            getId();
            const savedUser = JSON.stringify(user);
            localStorage.setItem(`${id}`, savedUser);
            localStorage.setItem("currentId", id);
            id++;
            resetInputs();
            window.location.assign(
                "https://mykhailo-zub.github.io/HW18-ReactJS.Styled/#/signin"
            );
        }
    };

    const resetInputs = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setNewsletter(false);
    };

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

    useEffect(() => {
        if (firstName.match(nameRegexp)) {
            setValidationFirstName("valid");
        } else if (firstName === "") {
            setValidationFirstName("default");
        } else setValidationFirstName("invalid");
    }, [firstName]);

    useEffect(() => {
        if (lastName.match(nameRegexp)) {
            setValidationLastName("valid");
        } else if (lastName === "") {
            setValidationLastName("default");
        } else setValidationLastName("invalid");
    }, [lastName]);

    return (
        <div className={style.wrapper}>
            <div className={style.logo}>
                <StyledLogo />
                <StyledTitle>Sign up</StyledTitle>
            </div>
            <div className={style.name_row}>
                <StyledInput
                    placeholder={"First name *"}
                    halfWidth
                    value={firstName}
                    validation={validationFirstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <StyledInput
                    placeholder={"Last name *"}
                    halfWidth
                    value={lastName}
                    validation={validationLastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <StyledInput
                placeholder={"Email Address *"}
                value={email}
                validation={validationEmail}
                onChange={(e) => setEmail(e.target.value)}
            />
            <StyledInput
                placeholder={"Password *"}
                type="password"
                value={password}
                validation={validationPassword}
                onChange={(e) => setPassword(e.target.value)}
            />
            <StyledLabel htmlFor="newsletter">
                <input
                    type="checkbox"
                    name="newsletter"
                    id="newsletter"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                />{" "}
                I want to receive inspiration, marketing promotions and updates
                via email
            </StyledLabel>
            <Button
                variant="contained"
                color="primary"
                className={style.sign_up_btn}
                onClick={signUp}
            >
                SIGN UP
            </Button>
            <div className={style.link_row}>
                <StyledLink href="https://mykhailo-zub.github.io/HW18-ReactJS.Styled/#/signin">
                    Already have an account? Sign in
                </StyledLink>
            </div>
            <StyledCopyright>
                Copyright &copy; Your Website 2020
            </StyledCopyright>
        </div>
    );
};

export default SignUp;
