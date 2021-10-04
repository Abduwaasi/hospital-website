import styled from "styled-components";
import {Container} from "../../GlobalStyle"
export const MedService= styled.section`
background:linear-gradient(to right, var(--dark-blue), var(--light-blue));
padding-top:4rem;
padding-bottom: 4rem;
text-align:center;

h2{
    font-size:2rem;
    color:var(--white);
    font-weight:700;
    letter-spacing:1.5;
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
font-size:1.4rem;
font-weight:400;
`
export const Text= styled.p`
color:var(--white);
font-size:1rem;
letter-spacing:1.5;
line-height:1.5;
margin:1rem auto;
font-weight:300;
`
