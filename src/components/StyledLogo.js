import React from "react";
import styled from "styled-components";

import icon from "../images/padlock.svg";

const StyledLogo = styled.div`
    background-color: #f48fb2;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-image: url("${icon}");
    background-size: 50% 50%;
    background-repeat: no-repeat;
    background-position: center;
`;

export default StyledLogo;
