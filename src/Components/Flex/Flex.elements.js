import styled from "styled-components";

import { Container } from "../../GlobalStyle";

export const FlexWrapper = styled.div`
background-color:var(--primary);
width:100%;

`

export const FlexContainer = styled(Container)`
padding-top:3rem;
padding-bottom:3rem;
display:flex;
${Container};
`
export const FlexRow = styled.div`
display:flex;
flex-direction: row;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;


`

export const FlexInfo = styled.div`
width:60%;
margin-bottom:2rem;
color:var(--white);
@media screen and (max-width:768px){
    text-align:center;
}
h1{
    margin-bottom:1rem;
    font-size:3rem;
    font-weight:3rem;
}
p{
    margin-bottom:1rem;
    line-height: 1.6;
}
@media screen and (max-width:768px){
  width:100%;
  max-width:90%;

}

`
export const FlexImage = styled.div`
width:40%;
@media screen and (max-width:768px){
    width:100%;
    max-width:90%;
    margin:0 auto;
}
`
export const Image = styled.img`
 width:100%;
 display:inline-block;
 vertical-align:middle;
 height:400px;

`