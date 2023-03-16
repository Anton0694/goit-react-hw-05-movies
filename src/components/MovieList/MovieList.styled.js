import styled from "styled-components";
import { Link  } from "react-router-dom";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
`;

export const MovieWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`;

export const MovieName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
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