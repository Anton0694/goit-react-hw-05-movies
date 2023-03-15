import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h1`
 text-align: center;

`
export const Links = styled(Link)`
display: flex;
text-decoration: none;
color: black;
font-size: 16px;
margin-bottom: 4px;
&:hover, :focus{
    color: #aec492
}
`