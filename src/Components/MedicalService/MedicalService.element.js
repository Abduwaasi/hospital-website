import styled from "styled-components";
import {Container} from "../../GlobalStyle"
export const MedService= styled.section`
background-color:var(--primary);
padding-top:4rem;
padding-bottom: 4rem;
text-align:center;

h2{
    color:var(--white);
    font-weight:600;
    letter-spacing:1.4;
    margin:1rem auto
}


`
export const MedContainer = styled(Container)`
padding-top:2rem;
display:grid;
gap:2rem;
grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
${Container};
border:transparent;
`

export const MedWrapper = styled.div`
text-align:start;
`
export const Title= styled.h3`
color:var(--white);
margin-top:0.5rem;
margin-bottom:0.5rem;
`
export const Text= styled.p`
color:var(--white);
font-size:0.9rem;
letter-spacing:1.5;
line-height:1.5;
margin-bottom:1rem;
`
