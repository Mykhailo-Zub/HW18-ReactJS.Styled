import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    width: ${(props) => (props.halfWidth ? "calc(50% - 10px)" : "100%")};
    height: 40px;
    border: ${(props) => {
        if (props.validation === "default") {
            console.log(props.validation);
            return "1px solid #404040";
        } else if (props.validation === "valid") {
            console.log(props.validation);
            return "4px solid green";
        } else if (props.validation === "invalid") {
            console.log(props.validation);
            return "4px solid red";
        }
    }};
    border-radius: 3px;
    background-color: #000;
    padding: 5px 10px;
    color: #fff;
    &:placeholder {
        content: "${(props) => props.placeholder}";
        color: #fff;
    }
`;

export default StyledInput;
