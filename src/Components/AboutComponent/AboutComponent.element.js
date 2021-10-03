import styled from "styled-components";
import { Container } from "../../GlobalStyle";
export const About = styled.section`
background-color: var(--white);
padding-top: 3rem;
padding-bottom: 3rem;
`
export const AboutContainer = styled(Container)`
display:grid;
grid-template-columns: 1.4fr 1fr;
${Container}
`
export const AboutInfo = styled.div`

`