import styled from "styled-components";
import { Container } from "../../GlobalStyle";
export const About = styled.section`
background-color: var(--gray-background);
padding-top: 3rem;
padding-bottom: 3rem;
`
export const AboutContainer = styled(Container)`
display:grid;
grid-template-columns: 1.4fr 1fr;
gap: 2rem;

@media screen and (max-width:768px){
    grid-template-columns: 1fr;
}
${Container}
`
export const AboutInfo = styled.div`
 color:var(--text-black);
`
export const AboutTitle = styled.h1`
font-size:3rem;
font-weight:700;
letter-spacing:1.5;

@media screen and (max-width:768px){
    font-size:1.5rem;
}

`
export const AboutText = styled.p`
font-size:1.2rem;
line-height:1.5;
margin-top:1rem;
text-align:justify;

`
export const AboutList = styled.ul`
display:flex;
flex-direction:column;
margin-top:1rem;
`
export const AboutItem = styled.li`
font-size:1.2rem;
line-height:2;
text-transform:capitalize;

&::before{
    content:"⚫";
    font-size:0.8rem;
    color:var(--dark-blue);
    margin-right:0.5rem;
}
`
export const AboutImage = styled.img`
display: inline;;
width:100%;
height:100%
`