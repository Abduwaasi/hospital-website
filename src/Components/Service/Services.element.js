import styled from "styled-components"
import { Container } from "../../GlobalStyle"
export const Servic=  styled.section`
background-color: var(--white);
padding-top:4rem;
padding-bottom:4rem;
`
export const ServiceContainer = styled(Container)`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap:2rem;
${Container};
`
export const ServiceContent = styled.div`
padding:1rem;
`
export const ImageContainer = styled.img`
width:100%;
height:250px;
display:inline-block;
`
export const ServiceInfo = styled.div`
background-color:var(--primary);
color:var(--white);
padding:2rem;
`
export const ServiceTitle = styled.h3`
 font-size:1.5rem;
 font-weight:600;
 margin-bottom:1rem;
`
export const ServiceText = styled.p`
 font-size:1rem;
 line-height:1.2;
`