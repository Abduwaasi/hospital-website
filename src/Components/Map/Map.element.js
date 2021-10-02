import styled from "styled-components";
import {Container} from "../../GlobalStyle"

export const GoogleMap = styled(Container)`
height:400px;
background-color:var(--white);
${Container}
`
export const MapFrame= styled.iframe`
width:100%;
height:100%;
border:0;
opacity:0.9;



`